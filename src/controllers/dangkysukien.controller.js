const DangKySuKien = require('../models/dangkysukien.model');

const registerController = async (req, res) => {
    const { MaSuKien, MaNguoiDung, TenNguoiDung, NgayDangKy, TrangThaiDangKy } = req.body;

    // Kiểm tra xem tất cả các trường cần thiết có được truyền vào không
    if (!MaSuKien || !MaNguoiDung || !TenNguoiDung || !NgayDangKy || !TrangThaiDangKy) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const result = await DangKySuKien.registerUserForEvent(MaSuKien, MaNguoiDung, TenNguoiDung, NgayDangKy, TrangThaiDangKy);
        res.status(200).json({ message: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllDangKySuKien = function(req, res) {
    DangKySuKien.findAll(function(err, dangkysukien) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ dangkysukien: dangkysukien });
        }
    });
};

// Controller để lấy một đăng ký sự kiện dựa trên mã đăng ký
const getDangKySuKienById = function(req, res) {
    var MaDangKy = req.params.MaDangKy;
    DangKySuKien.getOne(MaDangKy, function(err, dangkysukien) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ dangkysukien: dangkysukien });
        }
    });
};

// Controller để xóa một đăng ký sự kiện
const deleteDangKySuKien = function(req, res) {
    var MaDangKy = req.params.MaDangKy;
    DangKySuKien.delete(MaDangKy, function(err, result) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: "Đã xóa đăng ký sự kiện thành công" });
        }
    });
};

module.exports = {
    registerController,
    getAllDangKySuKien,
    getDangKySuKienById,
    deleteDangKySuKien
};
