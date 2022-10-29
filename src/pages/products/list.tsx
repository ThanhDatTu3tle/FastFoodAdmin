import React from "react";
import {
    useDataGrid,
    DataGrid,
    GridColumns,
    TagField,
    // DateField,
    List,
} from "@pankod/refine-mui";

import { IProducts } from "interfaces";

const columns: GridColumns<IProducts> = [
    {
        field: "maMonAn",
        headerName: "Mã Món Ăn",
        type: "string",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.maMonAn} />;
        },
    },
    {
        field: "tenMonAn",
        headerName: "Tên Món Ăn",
        type: "string",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.tenMonAn} />;
        },
    },
    {
        field: "hinhAnhMonAn",
        headerName: "Hình ảnh Món Ăn",
        type: "string",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.hinhAnhMonAn} />;
        },
    },
    {
        field: "moTaChiTiet",
        headerName: "Mô tả chi tiết",
        type: "string",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.moTaChiTiet} />;
        },
    },
    {
        field: "giaTien",
        headerName: "Giá tiền",
        type: "number",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.giaTien} />;
        },
    },
    {
        field: "yeuThich",
        headerName: "Yêu thích",
        type: "boolean",
        minWidth: 150,
        flex: 1,
        renderCell: function render(params) {
            return <TagField value={params.row.yeuThich} />;
        },
    },
];

export const ProductList: React.FC = () => {
    const { dataGridProps } = useDataGrid<IProducts>();

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} pageSize={1} autoHeight />
        </List>
    );
};
