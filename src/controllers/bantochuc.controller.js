// Import model BanToChuc
const BanToChuc = require('../models/bantochuc.model');

// Controller để lấy tất cả các ban tổ chức
exports.getAllBanToChuc = function(req, res) {
    BanToChuc.findAll(function(err, bantochucs) {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(200).json(bantochucs);
    });
};

// Controller để lấy một ban tổ chức theo mã BTC
exports.getBanToChucById = function(req, res) {
    var MaBTC = req.params.MaBTC;

    BanToChuc.getOne(MaBTC, function(err, bantochuc) {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (!bantochuc) {
            return res.status(404).json({ error: 'BanToChuc not found' });
        }
        res.status(200).json(bantochuc);
    });
};

// Controller để tạo một ban tổ chức mới
exports.createBanToChuc = function (req, res) {
    const btc = new BanToChuc(req.body);
    
    // Kiểm tra dữ liệu có được cung cấp không
    if (!btc.TenBTC || !btc.DiaChi || !btc.SoDienThoai || !btc.Email || !btc.MatKhau) {
        res.status(400).send({ success: false, error: true, message: 'Vui lòng cung cấp đầy đủ thông tin!' });
    } else {
        // Tạo ban tổ chức mới
        BanToChuc.create(btc)
            .then(newBTC => {
                res.status(201).send({ success: true, error: false, message: "Ban tổ chức đã được tạo thành công!", data: newBTC });
            })
            .catch(err => {
                console.log('Error in creating BanToChuc:', err);
                res.status(500).send('Internal Server Error');
            });
    }
};

// Controller để cập nhật thông tin một ban tổ chức
exports.updateBanToChuc = function(req, res) {
    var MaBTC = req.params.MaBTC;
    var updatedBTC = req.body;

    BanToChuc.update(MaBTC, updatedBTC, function(err, result) {
        if (err) {
            return res.status(500).json({ error: 'Failed to update BanToChuc' });
        }
        res.status(200).json({ message: 'BanToChuc updated successfully' });
    });
};

// Controller để xoá một ban tổ chức
exports.deleteBanToChuc = function(req, res) {
    var MaBTC = req.params.MaBTC;

    BanToChuc.delete(MaBTC, function(err, result) {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete BanToChuc' });
        }
        res.status(200).json({ message: 'BanToChuc deleted successfully' });
    });
};
