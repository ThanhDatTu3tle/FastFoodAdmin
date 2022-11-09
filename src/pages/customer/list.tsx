import React from "react";
import {
    useDataGrid,
    DataGrid,
    GridColumns,
    TagField,
    DateField,
    List,
} from "@pankod/refine-mui";

import { ICustomer } from "interfaces";

const columns: GridColumns<ICustomer> = [
    {
        field: "maKhachHang",
        headerName: "Mã Khách hàng",
        type: "string",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.maKhachHang} />;
        },
    },
    {
        field: "hoTen",
        headerName: "Họ tên",
        type: "string",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.hoTen} />;
        },
    },
    {
        field: "soDienThoai",
        headerName: "Số điện thoại",
        type: "string",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.soDienThoai} />;
        },
    },
    {
        field: "email",
        headerName: "Email",
        type: "string",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.email} />;
        },
    },
    {
        field: "matKhau",
        headerName: "Mật khẩu",
        type: "string",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.matKhau} />;
        },
    },
    {
        field: "hinhAnh",
        headerName: "Hình ảnh",
        type: "string",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.hinhAnh} />;
        },
    },
];

export const CustomerList: React.FC = () => {
    const { dataGridProps } = useDataGrid<ICustomer>();

    return (
        <List>
            <DataGrid {...dataGridProps} getRowId={(row) => row.maKhachHang} columns={columns} autoHeight />
        </List>
    );
};
