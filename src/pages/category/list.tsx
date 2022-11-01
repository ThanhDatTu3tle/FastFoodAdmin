import React from "react";
import {
    useDataGrid,
    DataGrid,
    GridColumns,
    TagField,
    // DateField,
    List,
} from "@pankod/refine-mui";

import { ICategory } from "interfaces";

const columns: GridColumns<ICategory> = [
    {
        field: "maDanhMuc",
        headerName: "Mã Danh mục",
        type: "string",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.maDanhMuc} />;
        },
    },
    {
        field: "tenDanhMuc",
        headerName: "Tên Danh Mục",
        type: "string",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.tenDanhMuc} />;
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

export const CategoryList: React.FC = () => {
    const { dataGridProps } = useDataGrid<ICategory>();

    return (
        <List>
            <DataGrid {...dataGridProps} getRowId={(row) => row.maDanhMuc} columns={columns} autoHeight />
        </List>
    );
};
