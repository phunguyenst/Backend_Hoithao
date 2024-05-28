-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th5 28, 2024 lúc 03:08 PM
-- Phiên bản máy phục vụ: 8.0.30
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qlsukienhoithao`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bantochuc`
--

CREATE TABLE `bantochuc` (
  `MaBTC` int UNSIGNED NOT NULL,
  `TenBTC` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `DiaChi` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `SoDienThoai` int NOT NULL,
  `Email` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `MatKhau` varchar(18) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `trangThai` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `bantochuc`
--

INSERT INTO `bantochuc` (`MaBTC`, `TenBTC`, `DiaChi`, `SoDienThoai`, `Email`, `MatKhau`, `trangThai`) VALUES
(1, 'Star Event', '26, Hoàng Kế Viêm, Tân Bình, TP.HCM', 156785640, 'starevent@gmail.com', '1234', 1),
(2, 'Lotus', 'Bình Thạnh, TP.HCM', 167457890, 'lotusgold@gmail.com', '1234', 1),
(3, 'Bamboo Tech', 'Thủ Đức, TP.HCM', 33456789, 'bambootech@gmail.com', '1234', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dangky_sukien`
--

CREATE TABLE `dangky_sukien` (
  `MaDangKy` int NOT NULL,
  `MaSuKien` int NOT NULL,
  `TenSuKien` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `HinhThuc` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `DiaDiem` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `SoNguoiThamDu` int NOT NULL,
  `MoTa` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `NgayDangKy` date NOT NULL,
  `TrangThaiDangKy` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `trangThai` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoithao`
--

CREATE TABLE `hoithao` (
  `MaHoiThao` int UNSIGNED NOT NULL,
  `TenHoiThao` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `HinhThuc` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `DiaDiem` varchar(70) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `ThoiGianBatDau` date NOT NULL,
  `ThoiGianKetThuc` date NOT NULL,
  `SoNguoiThamDu` int NOT NULL,
  `MoTa` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `HinhAnh` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `MaNguoiDung` int NOT NULL,
  `MaLich` int NOT NULL,
  `MaBTC` int NOT NULL,
  `MaNhanVien` int NOT NULL,
  `trangThai` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hoithao`
--

INSERT INTO `hoithao` (`MaHoiThao`, `TenHoiThao`, `HinhThuc`, `DiaDiem`, `ThoiGianBatDau`, `ThoiGianKetThuc`, `SoNguoiThamDu`, `MoTa`, `HinhAnh`, `MaNguoiDung`, `MaLich`, `MaBTC`, `MaNhanVien`, `trangThai`) VALUES
(1, 'Tech Conferences', 'online', 'Zoom Meeting\r\nId: 225 8876 978\r\nPassword: typic', '2024-04-17', '2024-04-17', 50, 'Sự kiện học hỏi và trao đổi công nghệ', 'hoithaocongnghe.jpg', 3, 3, 1, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lich`
--

CREATE TABLE `lich` (
  `MaLich` int NOT NULL,
  `TenLich` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `ThoiGian` date NOT NULL,
  `GhiChu` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `ThongBao` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `lich`
--

INSERT INTO `lich` (`MaLich`, `TenLich`, `ThoiGian`, `GhiChu`, `ThongBao`) VALUES
(1, 'Sự kiện block show', '2024-03-18', 'Sự kiện block show', 'Đến cổng vào lúc 08:00 AM'),
(2, 'Sự kiện KOL Affiliate', '2024-03-29', 'Sự kiện KOL Affiliate', 'Vào Zoom meeting lúc 09:00 AM'),
(4, 'Sự kiện New Tech', '2024-04-12', 'Sự kiện New Tech', ''),
(5, 'Sự kiện AI Machine learning', '2024-04-24', 'Sự kiện AI Machine learning', ''),
(6, 'Sự kiện Book Tech', '2024-04-10', 'Sự kiện Book Tech', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaihoithao`
--

CREATE TABLE `loaihoithao` (
  `MaLoai` int UNSIGNED NOT NULL,
  `TenLoai` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `HinhThuc` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `loaihoithao`
--

INSERT INTO `loaihoithao` (`MaLoai`, `TenLoai`, `HinhThuc`) VALUES
(1, 'offline', 'offline'),
(2, 'online', 'online');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaisukien`
--

CREATE TABLE `loaisukien` (
  `MaLoai` int UNSIGNED NOT NULL,
  `TenLoai` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `HinhThuc` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `loaisukien`
--

INSERT INTO `loaisukien` (`MaLoai`, `TenLoai`, `HinhThuc`) VALUES
(1, 'offline', 'offline'),
(2, 'online', 'online');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phieuqr`
--

CREATE TABLE `phieuqr` (
  `MaPhieu` int UNSIGNED NOT NULL,
  `HinhAnh` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `MaVe` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role`
--

CREATE TABLE `role` (
  `MaRole` int UNSIGNED NOT NULL,
  `TenRole` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `GhiChu` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `role`
--

INSERT INTO `role` (`MaRole`, `TenRole`, `GhiChu`) VALUES
(1, 'Quản trị viên', 'Vai trò quản lý hệ thống'),
(2, 'Nhân viên', ''),
(3, 'Người Dùng', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sukien`
--

CREATE TABLE `sukien` (
  `MaSuKien` int NOT NULL,
  `TenSuKien` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `HinhThuc` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `DiaDiem` varchar(70) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `ThoiGianBatDau` date NOT NULL,
  `ThoiGianKetThuc` date NOT NULL,
  `SoNguoiThamDu` int NOT NULL,
  `MoTa` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `HinhAnh` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `MaLich` int NOT NULL,
  `MaNguoiDung` int NOT NULL,
  `MaBTC` int NOT NULL,
  `MaNhanVien` int NOT NULL,
  `trangThai` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sukien`
--

INSERT INTO `sukien` (`MaSuKien`, `TenSuKien`, `HinhThuc`, `DiaDiem`, `ThoiGianBatDau`, `ThoiGianKetThuc`, `SoNguoiThamDu`, `MoTa`, `HinhAnh`, `MaLich`, `MaNguoiDung`, `MaBTC`, `MaNhanVien`, `trangThai`) VALUES
(1, 'Mihoyo', 'offline', 'Tân Bình', '2024-06-12', '2024-06-12', 50, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 1, 1, 2, 3, 1),
(2, 'Honkai Star Rail', 'online', 'Link tham gia: https://meet.google.com/uek-foqg-xnv', '2024-06-19', '2024-06-19', 70, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 2, 1, 2, 1, 1),
(3, 'Block Show', 'offline', '12, Nguyễn Văn Bảo, Phường 4, Gò Vấp, TP.HCM', '2024-03-18', '2024-03-18', 50, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', 'blockchain.png', 1, 1, 1, 1, 1),
(4, 'Sự kiện KOL Affiliate', 'online', 'Zoom Meeting\r\nId: 973 999 2740\r\nPass hafiz', '2024-03-29', '2024-03-29', 100, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', 'KOL.jpg', 2, 2, 2, 2, 1),
(5, 'New tech', 'offline', '12, Nguyễn Văn Bảo, Phường 4, Gò Vấp, TP.HCM', '2024-04-12', '2024-04-12', 50, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', 'samsung.jpg', 3, 3, 3, 2, 1),
(6, 'AI Machine learning', 'online', 'Zoom Meeting\r\nID: 245 6548 991\r\nPassword: almachine', '2024-04-24', '2024-04-24', 70, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', 'machinelearing.jpg', 4, 2, 3, 1, 1),
(7, 'Book tech', 'offline', '12, Nguyễn Văn Bảo, Gò Vấp, Phường 4, TP.HCM', '2024-04-10', '2024-04-10', 30, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', 'book.jpg', 5, 5, 1, 1, 1),
(8, 'Code master', 'online', 'https://meet.google.com/uek-foqg-xnv', '2024-06-18', '2024-06-18', 30, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 1, 2, 1, 1, 1),
(9, 'Sự kiện KOL Affiliate', 'online', 'Zoom: 089 164789 203\r\nPass: 5W632', '2024-06-19', '2024-06-19', 100, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 1, 2, 1, 1, 1),
(10, 'Honkai star rail', 'offline', 'Quận 1, TP.HCM', '2024-06-27', '2024-06-27', 100, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 1, 2, 1, 1, 1),
(11, 'Honkai Star Rail', 'offline', 'Thủ Đức', '2024-05-29', '2024-05-29', 30, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 4, 3, 2, 2, 1),
(12, 'Genshin impact', 'online', 'https://meet.google.com/uek-foqg-xnv', '2024-06-05', '2024-06-05', 100, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 3, 4, 2, 1, 1),
(13, 'Honkai star rail', 'offline', 'Vạn Hạnh Mall', '2024-05-29', '2024-05-30', 100, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 1, 1, 1, 1, 1),
(14, 'Wundering waves', 'online', 'https://meet.google.com/uek-foqg-xnv', '2024-06-20', '2024-06-20', 50, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 2, 1, 1, 2, 1),
(15, 'Honkai 2', 'online', 'aaa', '2024-05-29', '2024-05-29', 32, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 3, 3, 2, 1, 1),
(16, 'Honkai 2', 'online', 'aaa', '2024-05-29', '2024-05-29', 32, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 3, 3, 2, 1, 1),
(17, 'Shopee KOL', 'offline', '12, Nguyễn Văn Bảo, Gò Vấp, TP.HCM', '2024-06-26', '2024-06-26', 70, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 2, 3, 4, 1, 1),
(18, 'Mihoyo', 'Offline', 'Mihoyo center, quận 1, TP.HCM', '2024-05-30', '2024-05-30', 40, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 1, 1, 1, 3, 1),
(19, 'Himeko and Welt', '', 'Quận 1, TP.HCM', '2024-05-30', '2024-05-30', 50, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 1, 1, 1, 2, 1),
(20, 'Metaverse', 'online', 'https://meet.google.com/uek-foqg-xnv', '2024-05-31', '2024-05-31', 100, 'https://iuhedu-my.sharepoint.com/:w:/g/personal/20048861_quy_student_iuh_edu_vn/EanrB-HMXQ9Ekua__bmQRmwBg0OPjJ7Rw63UyQWX4uEQWw?e=7jJvU4', '', 1, 1, 1, 2, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `MaTaiKhoan` int UNSIGNED NOT NULL,
  `TenTaiKhoan` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `password` varchar(18) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'NguoiDung',
  `SoDienThoai` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `DiaChi` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `trangThai` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`MaTaiKhoan`, `TenTaiKhoan`, `password`, `role`, `SoDienThoai`, `DiaChi`, `email`, `trangThai`) VALUES
(1, 'anhquan', 'admin', 'QuanTriVien', '0915874414', '12, Đường Nguyễn Văn Bảo, Quận Gò Vấp, Thành phố HCM', 'admin.btc@gmail.com', 1),
(2, 'DieuKy', '', 'NguoiDung', '098765422', 'Quảng Nam', 'dieuky@gmail.com', 1),
(4, 'Quy Van', '', 'NguoiDung', '0816977958', 'Vũng Tàu', 'quynguyenpro1410@gmail.com', 1),
(7, 'anhquan2', '1234', 'NguoiDung', '0915874414', '12, Đường Nguyễn Văn Bảo, Quận Gò Vấp, Thành phố HCM', 'simming@gmail.com', 1),
(8, 'Quân', '123', 'NguoiDung', '9367317', 'GO VAP', 'quan2s@gmail.com', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tailieu`
--

CREATE TABLE `tailieu` (
  `MaTaiLieu` int UNSIGNED NOT NULL,
  `TenTaiLieu` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `MaNguoiDung` int NOT NULL,
  `trangThai` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tailieu`
--

INSERT INTO `tailieu` (`MaTaiLieu`, `TenTaiLieu`, `MaNguoiDung`, `trangThai`) VALUES
(1, 'Tài liệu công nghệ Block Chain', 1, 1),
(2, 'Tài liệu Digital Marketing', 2, 1),
(3, 'Tài liệu về công nghệ điện tử', 3, 1),
(4, 'Tài liệu về AL Machine Learning', 2, 1),
(5, 'Tài liệu book tech', 5, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thongtinve`
--

CREATE TABLE `thongtinve` (
  `MaVe` int UNSIGNED NOT NULL,
  `LoaiSuKien` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `HinhThuc` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `DiaDiem` varchar(70) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `ThoiGian` date NOT NULL,
  `DoiTuong` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `SoNguoiThoiGian` int NOT NULL,
  `MoTa` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `thongtinve`
--

INSERT INTO `thongtinve` (`MaVe`, `LoaiSuKien`, `HinhThuc`, `DiaDiem`, `ThoiGian`, `DoiTuong`, `SoNguoiThoiGian`, `MoTa`) VALUES
(1, 'offline', 'offline', '12,Nguyễn Văn Bảo, Phường 4, Gò Vấp, TP.HCM', '2024-03-18', 'Tất cả', 50, 'Sự kiện Block Show'),
(2, 'online', 'online', 'Zoom Meeting\r\nId: 973 999 2740\r\nPass hafiz', '2024-03-29', 'Tất cả', 100, 'Sự kiện KOL Affiliate');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ve`
--

CREATE TABLE `ve` (
  `MaVe` int UNSIGNED NOT NULL,
  `TenVe` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `MaNguoiDung` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `ve`
--

INSERT INTO `ve` (`MaVe`, `TenVe`, `MaNguoiDung`) VALUES
(1, 'Vé sự kiện block show', 1),
(2, 'Vé sự kiện KOL Affiliate', 2),
(3, 'Vé sự kiện New Tech', 3),
(4, 'Vé sự kiện AL Machine Learning', 2),
(5, 'Vé sự kiện Book Tech', 5),
(6, 'Vé hội thảo Tech Conferences', 3);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `bantochuc`
--
ALTER TABLE `bantochuc`
  ADD PRIMARY KEY (`MaBTC`);

--
-- Chỉ mục cho bảng `dangky_sukien`
--
ALTER TABLE `dangky_sukien`
  ADD PRIMARY KEY (`MaDangKy`),
  ADD KEY `MaSuKien` (`MaSuKien`);

--
-- Chỉ mục cho bảng `hoithao`
--
ALTER TABLE `hoithao`
  ADD PRIMARY KEY (`MaHoiThao`),
  ADD KEY `MaNguoiDung` (`MaNguoiDung`,`MaLich`,`MaBTC`,`MaNhanVien`);

--
-- Chỉ mục cho bảng `lich`
--
ALTER TABLE `lich`
  ADD PRIMARY KEY (`MaLich`);

--
-- Chỉ mục cho bảng `loaihoithao`
--
ALTER TABLE `loaihoithao`
  ADD PRIMARY KEY (`MaLoai`);

--
-- Chỉ mục cho bảng `loaisukien`
--
ALTER TABLE `loaisukien`
  ADD PRIMARY KEY (`MaLoai`);

--
-- Chỉ mục cho bảng `phieuqr`
--
ALTER TABLE `phieuqr`
  ADD PRIMARY KEY (`MaPhieu`),
  ADD KEY `MaVe` (`MaVe`);

--
-- Chỉ mục cho bảng `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`MaRole`);

--
-- Chỉ mục cho bảng `sukien`
--
ALTER TABLE `sukien`
  ADD PRIMARY KEY (`MaSuKien`),
  ADD KEY `MaLich` (`MaLich`),
  ADD KEY `MaNguoiDung` (`MaNguoiDung`),
  ADD KEY `MaBTC` (`MaBTC`),
  ADD KEY `MaNhanVien` (`MaNhanVien`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`MaTaiKhoan`);

--
-- Chỉ mục cho bảng `tailieu`
--
ALTER TABLE `tailieu`
  ADD PRIMARY KEY (`MaTaiLieu`),
  ADD KEY `MaNguoiDung` (`MaNguoiDung`);

--
-- Chỉ mục cho bảng `thongtinve`
--
ALTER TABLE `thongtinve`
  ADD PRIMARY KEY (`MaVe`);

--
-- Chỉ mục cho bảng `ve`
--
ALTER TABLE `ve`
  ADD PRIMARY KEY (`MaVe`),
  ADD KEY `MaNguoiDung` (`MaNguoiDung`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `bantochuc`
--
ALTER TABLE `bantochuc`
  MODIFY `MaBTC` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `dangky_sukien`
--
ALTER TABLE `dangky_sukien`
  MODIFY `MaDangKy` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `hoithao`
--
ALTER TABLE `hoithao`
  MODIFY `MaHoiThao` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `lich`
--
ALTER TABLE `lich`
  MODIFY `MaLich` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `loaihoithao`
--
ALTER TABLE `loaihoithao`
  MODIFY `MaLoai` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `loaisukien`
--
ALTER TABLE `loaisukien`
  MODIFY `MaLoai` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `phieuqr`
--
ALTER TABLE `phieuqr`
  MODIFY `MaPhieu` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `role`
--
ALTER TABLE `role`
  MODIFY `MaRole` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `sukien`
--
ALTER TABLE `sukien`
  MODIFY `MaSuKien` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `MaTaiKhoan` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT cho bảng `tailieu`
--
ALTER TABLE `tailieu`
  MODIFY `MaTaiLieu` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `thongtinve`
--
ALTER TABLE `thongtinve`
  MODIFY `MaVe` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `ve`
--
ALTER TABLE `ve`
  MODIFY `MaVe` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
