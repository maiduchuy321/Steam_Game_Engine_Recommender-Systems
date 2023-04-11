from flask import Flask, redirect, url_for, render_template, jsonify, request
from pprint import pprint
import pandas as pd
import numpy as np
pd.set_option("display.max_colwidth", 10000)
app = Flask(__name__)

# CODE FROM NOTEBOOK FOR CF
df = pd.read_csv(
    r"E:\Hoc\Recommender System\steam-recommendation-system\testing_ground\final_dataset1.csv")
user_ratings = df.pivot_table(index=['user_id'], columns=[
                              'appid'], values='rating')
user_ratings = user_ratings.dropna(thresh=0, axis=1).fillna(0)

game_similarity_df = user_ratings.corr(method='pearson', min_periods=0)


endpoint = pd.read_csv(
    "E:\Hoc\Recommender System\steam-recommendation-system\data\endpoint_dataset_final.csv")
# print(endpoint)


def get_similar_games(game_name, user_rating):
    similar_score = game_similarity_df[game_name]*(user_rating-2.5)
    similar_score = similar_score.sort_values(ascending=False)
    return similar_score.head(5)


@app.route('/', methods=['POST'])
def home():
    a = request.get_json(force=True)
    print(a)

    in_lst = []
    for key, value in a.items():
        # print(value)
        if value[0] == '' or value[1] == '':
            continue
        else:
            tup = (int(value[0]), int(value[1]))
            in_lst.append(tup)

    similar_games = pd.DataFrame()

    for game, rating in in_lst:
        similar_games = similar_games.append(
            get_similar_games(game, rating), ignore_index=True)

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
    for appid in top_five:
        o_name = endpoint[endpoint["appid"] ==
                          appid]['o_name'].to_string(index=False).strip()
        media_url = endpoint[endpoint["appid"] ==
                             appid]['header_image'].to_string(index=False).strip()
        rec_tuple = [o_name, media_url]
        print(rec_tuple)
        lst.append(rec_tuple)

    d = {"result": lst}

    return jsonify(d)


if __name__ == "__main__":
    app.run()
