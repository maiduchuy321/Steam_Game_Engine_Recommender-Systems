from flask import Flask, redirect, url_for, render_template, jsonify, request
from pprint import pprint
import pandas as pd
import numpy as np

from sklearn.metrics.pairwise import cosine_similarity

pd.set_option("display.max_colwidth", 10000)
app = Flask(__name__)

# CODE FROM NOTEBOOK FOR CF
df = pd.read_csv(
    r"E:\Hoc\Recommender System\steam-recommendation-system\testing_ground\final_dataset1.csv")

# Sử dụng phương pháp pivot_table để tạo một bảng dữ liệu mới, với các chỉ số index là "user_id", 
# các cột là "appid" và giá trị của bảng là "rating".
user_ratings = df.pivot_table(index=['user_id'], columns=[
                              'appid'], values='rating')

# Xóa các cột chứa giá trị NaN và thay thế chúng bằng 0.
user_ratings = user_ratings.dropna(thresh=0, axis=1).fillna(0)



# Tính toán ma trận tương đồng (similarity matrix) 
# của các trò chơi bằng phương pháp tương quan Cosine giữa các cột (trò chơi) 
game_similarity_df = cosine_similarity(user_ratings.T)
game_similarity_df = pd.DataFrame(game_similarity_df , 
                                  index=user_ratings.columns, 
                                  columns=user_ratings.columns)


endpoint = pd.read_csv(
    "E:\Hoc\Recommender System\steam-recommendation-system\data\endpoint_dataset_final.csv")
# print(endpoint)

# Hàm để tính toán điểm tương đồng giữa trò chơi "game_name" 
# và các trò chơi khác dựa trên đánh giá "user_rating" của người dùng.
def get_similar_games(game_name, user_rating):
    similar_score = game_similarity_df[game_name]*(user_rating-2.5)
    similar_score = similar_score.sort_values(ascending=False)
    return similar_score.head(10)


@app.route('/', methods=['GET', 'POST'])
def popular_game():
    # Lọc các tựa game có rating >= 4
    filtered_df = df[df['rating'] >= 4]

    # Đếm số lượng từng tựa game
    game_counts = filtered_df.groupby(['name', 'appid']).size().reset_index(name='count')

    # Sắp xếp theo số lượng giảm dần
    top_10_games = game_counts.head(10)
    # print(top_10_games)
    # Merge top_10_games với endpoint bằng cột 'appid'
    merged_df = pd.merge(top_10_games, endpoint, on='appid')
    # Lấy appid và header_image
    appid_header_image = merged_df[['o_name', 'header_image']].values.tolist()
    print(appid_header_image)
    result = {"result": appid_header_image}
    
    return jsonify(result)

def home():
    # Nhận dữ liệu JSON từ yêu cầu POST và lưu vào biến "a".
    a = request.get_json(force=True)
    # print(a)
    in_lst = []
    for key, value in a.items():
        # print(value)
        # Kiểm tra xem nếu giá trị của "value" là rỗng (hoặc không hợp lệ), thì bỏ qua.
        if value[0] == '' or value[1] == '':
            continue
        else:
            # Chuyển đổi giá trị của "value" sang kiểu số nguyên và lưu vào một tuple.
            tup = (int(value[0]), int(value[1]))
            in_lst.append(tup)

    # Tạo một DataFrame trống để lưu trữ các trò chơi tương đồng.
    similar_games = pd.DataFrame()
    # Vòng lặp for này lấy mỗi bộ dữ liệu từ in_lst và tìm kiếm 10 trò chơi tương tự nhất với trò chơi đó sử dụng hàm get_similar_games().
    # Sau đó, kết quả được thêm vào similar_games.
    for game, rating in in_lst:
        similar_games = similar_games.append(
            get_similar_games(game, rating), ignore_index=True)
    # similar_games được sắp xếp và giới hạn chỉ lấy 10 trò chơi tương tự nhất với các trò chơi được đánh giá.
    similar_games = similar_games.sum().sort_values(ascending=False)
    top_ten = similar_games.head(10)
    top_ten = list(top_ten.index)

    top_five = []
    in_lst = [v[0] for v in in_lst]
    for appid in top_ten:
        if len(top_five) >= 5:
            break
        if appid not in in_lst:
            top_five.append(appid)
    print(top_five)

    lst = []
    # Vòng lặp tiếp theo tạo một danh sách lst chứa tên và đường dẫn hình ảnh của 5 trò chơi tương tự nhất.
    # Tên và đường dẫn được lấy từ một tập dữ liệu endpoint_dataset_final.csv được đọc vào biến endpoint ở đầu chương trình.
    for appid in top_five:
        o_name = endpoint[endpoint["appid"] ==
                          appid]['o_name'].to_string(index=False).strip()
        media_url = endpoint[endpoint["appid"] ==
                             appid]['header_image'].to_string(index=False).strip()
        rec_tuple = [o_name, media_url]
        # print(rec_tuple)
        lst.append(rec_tuple)

    d = {"result": lst}

    return jsonify(d)


if __name__ == "__main__":
    app.run()
