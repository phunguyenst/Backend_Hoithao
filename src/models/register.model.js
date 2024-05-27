const connection = require('../../config/db.config');

let checkExistEmail = function(email) {
    return new Promise(function(resolve, reject) {
        try {
            connection.query("SELECT * FROM taikhoan WHERE email = ?", [email], function(error, rows) {
                if (error) {
                    reject(error);
                } else {
                    // Nếu có bất kỳ dòng nào được trả về từ truy vấn, email đã tồn tại
                    if (rows.length > 0) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    checkExistEmail: checkExistEmail
};


let createNewUser = function(data) {
    return new Promise(function(resolve, reject) {
        try {
            // Kiểm tra xem email đã tồn tại chưa
            checkExistEmail(data.email).then(function(isEmailExist) {
                if (isEmailExist) {
                    // reject(`This email "${data.email}" has already been registered. Please choose another email.`);
                    reject('Email already exists');
                } else {
                    let userItem = {
                        TenTaiKhoan: data.TenTaiKhoan,
                        email: data.email,
                        password: data.password,
                        // DiaChi: data.DiaChi,
                        // SoDienThoai: data.SoDienThoai // Thêm trường SoDienThoai vào đây
                    };

                    // Tạo một tài khoản người dùng mới
                    connection.query(
                        'INSERT INTO taikhoan SET ?', userItem,
                        function(err, rows) {
                            if (err) {
                                console.log(err);
                                reject(err);
                            } else {
                                resolve("Create a new user successful");
                            }
                        }
                    );
                }
            }).catch(function(err) {
                reject(err); // Xử lý lỗi nếu có lỗi xảy ra khi kiểm tra email
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createNewUser: createNewUser,
    // checkExistEmail: checkExistEmail
};
