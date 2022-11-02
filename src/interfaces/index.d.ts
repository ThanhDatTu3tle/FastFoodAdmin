// Bảng DANHMUC - Category
export interface ICategory {
  maDanhMuc: string;
  tenDanhMuc: string;
  hinhAnh: string;
}

// Bảng KHACHHANG - Customer
export interface ICustomer {
  maKhachHang: string;
  hoTen: string;
  ngaySinh: Date;
  soDienThoai: string;
  email: string;
  matKhau: string;
  hinhAnh: string;
}

// Bảng MONAN - Products
export interface IProducts {
  maMonAn: string;
  maDanhMuc: { maDanhMuc: string; };
  tenMonAn: string;
  hinhAnhMonAn: string;
  moTaChiTiet: string;
  giaTien: number;
  yeuThich: boolean;
}

// Bảng YKIENKHACHHANG - Feedback
export interface IFeedback {
  maYKien: string;
  maKhachHang: { maKhachHang: string };
  noiDung: string;
  danhGia: number;
}

// Bảng DANHSACHDIACHI - Address
export interface IAddress {
  maDiaChi: string;
  maKhachHang: { maKhachHang: string };
  diaChi: string;
  tenDiaChi: number;
} 
