// Bảng DANHMUC - Category
export interface ICategory {
  maDanhMuc: string;
  tenDanhMuc: string;
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
