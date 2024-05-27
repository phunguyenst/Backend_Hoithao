-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th4 19, 2024 lúc 04:15 AM
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
  `MaSuKien` int DEFAULT NULL,
  `MaNguoiDung` int DEFAULT NULL,
  `TenNguoiDung` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `NgayDangKy` datetime DEFAULT NULL,
  `TrangThaiDangKy` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `trangThai` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `dangky_sukien`
--

INSERT INTO `dangky_sukien` (`MaDangKy`, `MaSuKien`, `MaNguoiDung`, `TenNguoiDung`, `NgayDangKy`, `TrangThaiDangKy`, `trangThai`) VALUES
(5, 3, 2, 'Trương Phú Quý', NULL, NULL, 1),
(6, 3, 2, 'Trương Phú Quý', '2024-04-19 00:00:00', 'Đã đăng ký', 1);

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
-- Cấu trúc bảng cho bảng `nguoidung`
--

CREATE TABLE `nguoidung` (
  `MaNguoiDung` int NOT NULL,
  `TenNguoiDung` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `DiaChi` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `SoDienThoai` int NOT NULL,
  `email` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `password` varchar(18) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `trangThai` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `nguoidung`
--

INSERT INTO `nguoidung` (`MaNguoiDung`, `TenNguoiDung`, `DiaChi`, `SoDienThoai`, `email`, `password`, `trangThai`) VALUES
(1, 'Nguyễn Thị Diệu Linh', 'Đà Nẵng', 987654222, 'dieuky@gmail.com', '1234', 1),
(2, 'Trương Phú Quý', 'Tân Thới, Tiền Giang', 789665431, 'truongphuquy', '1212', 1),
(3, 'Nguyễn Văn Phú', 'Vũng Tàu', 338630727, 'phusenpai@gmail.com', '1111', 1),
(4, 'Nguyễn Quang Tú', 'Bình Thạnh, TP.HCM', 125789456, 'tuquang@gmail.com', '1212', 1),
(5, 'Nguyễn Thị Kim Yến', 'Tiền Giang', 331236688, 'yenxd@gmail.com', '1234', 1),
(6, 'Nguyễn Văn Quý', 'Gò vấp', 816977958, 'quy14@gmail.com', '1234', 1),
(7, 'quý', 'gò vấp', 816977958, 'quynguyenpro1410@gmail.com', '1234', 1),
(8, 'Linh tesst', 'Gò vấp', 816977958, 'quylinhtesst@gmail.com', '1234', 1),
(9, 'quý', 'gò vấp', 816977952, 'linh123@gmail.com', '123', 1),
(10, 'quý', 'gò vấp', 816977952, 'linh12d3@gmail.com', '123', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

CREATE TABLE `nhanvien` (
  `MaNhanVien` int NOT NULL,
  `TenNhanVien` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `DiaChi` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `SoDienThoai` int NOT NULL,
  `Email` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `MatKhau` varchar(18) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `trangThai` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `nhanvien`
--

INSERT INTO `nhanvien` (`MaNhanVien`, `TenNhanVien`, `DiaChi`, `SoDienThoai`, `Email`, `MatKhau`, `trangThai`) VALUES
(1, 'Nguyễn Trần Nhật Trường', 'Gò Vấp, TP.HCM', 335536783, 'truongtran@gmail.com', '1234', 1),
(2, 'Trần Thị Bảo Anh', 'Củ Chi, TP.HCM', 857778560, 'anhne@gmail.com', '1234', 1),
(3, 'Trương Đình Long', 'Bình Tân, TP.HCM', 366774530, 'longdinh@gmail.com', '1234', 1);

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
(3, 'Ban Tổ Chức', '');

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
(3, 'Block Show', 'offline', '12, Nguyễn Văn Bảo, Phường 4, Gò Vấp, TP.HCM', '2024-03-18', '2024-03-18', 50, 'Sự kiện block show giúp mọi người hiễu rõ về block chain, cũng như công nghệ block chain có trong những lĩnh vực nào', 'blockchain.png', 1, 1, 1, 1, 1),
(4, 'Sự kiện KOL Affiliate', 'online', 'Zoom Meeting\r\nId: 973 999 2740\r\nPass hafiz', '2024-03-29', '2024-03-29', 100, 'Sự kiện gồm các buổi diễn thuyết, panel thảo luận, workshop, và các hoạt động mạng lưới để tạo ra cơ hội kết nối và hợp tác về KOL', 'KOL.jpg', 2, 2, 2, 2, 1),
(5, 'New tech', 'offline', '12, Nguyễn Văn Bảo, Phường 4, Gò Vấp, TP.HCM', '2024-04-12', '2024-04-12', 50, 'Sự kiển ra mắt quảng bá công nghệ thiết bị mới', 'samsung.jpg', 3, 3, 3, 2, 1),
(6, 'AI Machine learning', 'online', 'Zoom Meeting\r\nID: 245 6548 991\r\nPassword: almachine', '2024-04-24', '2024-04-24', 70, 'Học hỏi về công nghệ AI áp dụng gì trong đời sống', 'machinelearing.jpg', 4, 2, 3, 1, 1),
(7, 'Book tech', 'offline', '12, Nguyễn Văn Bảo, Gò Vấp, Phường 4, TP.HCM', '2024-04-10', '2024-04-10', 30, 'Trao đổi với các chuyên gia trong lĩnh vực sách', 'book.jpg', 5, 5, 1, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `MaTaiKhoan` int UNSIGNED NOT NULL,
  `TenTaiKhoan` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `MatKhau` varchar(18) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `SoDienThoai` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `DiaChi` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Email` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `trangThai` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

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
  ADD KEY `MaSuKien` (`MaSuKien`),
  ADD KEY `MaNguoiDung` (`MaNguoiDung`);

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
-- Chỉ mục cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`MaNguoiDung`);

--
-- Chỉ mục cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`MaNhanVien`);

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
  MODIFY `MaDangKy` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
-- AUTO_INCREMENT cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `MaNguoiDung` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  MODIFY `MaNhanVien` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `phieuqr`
--
ALTER TABLE `phieuqr`
  MODIFY `MaPhieu` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `role`
--
ALTER TABLE `role`
  MODIFY `MaRole` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `sukien`
--
ALTER TABLE `sukien`
  MODIFY `MaSuKien` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `MaTaiKhoan` int UNSIGNED NOT NULL AUTO_INCREMENT;

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

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `dangky_sukien`
--
ALTER TABLE `dangky_sukien`
  ADD CONSTRAINT `dangky_sukien_ibfk_1` FOREIGN KEY (`MaSuKien`) REFERENCES `sukien` (`MaSuKien`),
  ADD CONSTRAINT `dangky_sukien_ibfk_2` FOREIGN KEY (`MaNguoiDung`) REFERENCES `nguoidung` (`MaNguoiDung`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
