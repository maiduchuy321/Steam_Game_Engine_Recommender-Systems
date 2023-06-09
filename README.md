#### **Hệ thống Gợi Ý các tựa game trên Steam dựa vào đánh giá **

Một hệ thống gợi ý dựa trên phương pháp Lọc cộng tác từ các bộ dữ liệu của người dùng trên Steam.

Trong quá trình xử lý dữ liệu, tôi sử dụng Pandas để thao tác với dữ liệu và một số hàm chuỗi được sử dụng để làm sạch văn bản không phải Unicode hoặc không phải ký tự chữ số. Ngoài ra, Flask và JS cũng được sử dụng cho phần giao diện người dùng.

Xử lý dữ liệu
Hai bộ dữ liệu đã được sử dụng để tạo ra hệ thống gợi ý này. Đầu tiên là Bộ dữ liệu trò chơi Steam trên Kaggle. Điều này cần thiết để xác định tên trò chơi thành các ID ứng dụng của chúng vì bộ dữ liệu khác, chứa đánh giá tiềm ẩn dưới dạng số giờ chơi của một người dùng cho mỗi trò chơi, không chứa các ID ứng dụng này. Bộ dữ liệu người dùng cũng được lấy từ Kaggle tại đây.

## To Run

Để chạy dự án yêu cầu phải cài NPM:
npm install

Để khởi chạy hệ thống: haỹ mở client với chrome có tùy chọn: C:\Program Files\Google\Chrome\Application\chrome.exe --disable-web-security --user-data-dir=C:\chromeTemp

Ở thử mục client sẽ khởi chạy với lệnh: npm run start
Ở thử mục sever sẽ khởi chạy với lệnh: flask run
