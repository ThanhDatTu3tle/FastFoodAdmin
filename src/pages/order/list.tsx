import React from "react";
import { useMany } from "@pankod/refine-core";
import {
    useDataGrid,
    DataGrid,
    GridColumns,
    TagField,
    // DateField,
    List,
    ShowButton,
} from "@pankod/refine-mui";

import { IProducts, ICategory } from "interfaces";

export const ProductList: React.FC = () => {
    const { dataGridProps } = useDataGrid<IProducts>();

    const categoryIds = dataGridProps.rows.map((item) => item.maDanhMuc.maDanhMuc);
    const { data: categoriesData, isLoading } = useMany<ICategory>({
        resource: "category",
        ids: categoryIds,
        queryOptions: {
            enabled: categoryIds.length > 0,
        },
    });

    const columns = React.useMemo<GridColumns<IProducts>>(
        () => [
            {
                field: "maMonAn",
                headerName: "Mã món ăn",
                type: "string",
                minWidth: 100,
                flex: 1,
                renderCell: function render(params) {
                    return <TagField value={params.row.maMonAn} />;
                },
            },
            {
                field: "maDanhMuc.maDanhMuc",
                headerName: "Tên danh mục",
                type: "string",
                minWidth: 150,
                flex: 1,
                renderCell: function render({ row }) {
                    if (isLoading) {
                        return "Loading...";
                    }

                    const category = categoriesData?.data.find(
                        (item) => item.maDanhMuc === row.maDanhMuc.maDanhMuc,
                    );
                    return category?.tenDanhMuc;
                },
            },
            {
                field: "tenMonAn",
                headerName: "Tên món ăn",
                type: "string",
                minWidth: 350,
                flex: 1,
                renderCell: function render(params) {
                    return <TagField value={params.row.tenMonAn} />;
                },
            },
            {
                field: "hinhAnhMonAn",
                headerName: "Hình ảnh món ăn",
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
                minWidth: 250,
                flex: 1,
                renderCell: function render(params) {
                    return <TagField value={params.row.moTaChiTiet} />;
                },
            },
            {
                field: "giaTien",
                headerName: "Giá tiền",
                type: "number",
                minWidth: 50,
                flex: 1,
                renderCell: function render(params) {
                    return <TagField value={params.row.giaTien} />;
                },
            },
            {
                field: "yeuThich",
                headerName: "Yêu thích",
                type: "boolean",
                minWidth: 50,
                flex: 1,
                renderCell: function render(params) {
                    return <TagField value={params.row.yeuThich} />;
                },
            },
            {
                headerName: "Actions",
                field: "actions",
                minWidth: 100,
                renderCell: function render(params) {
                    return <ShowButton hideText recordItemId={params.row.maMonAn} />;
                },
            },
        ],
        [categoriesData, isLoading],
    ); 

    return (
        <List>
            <DataGrid {...dataGridProps} getRowId={(row) => row.maMonAn} columns={columns} autoHeight />
        </List>
    );
};
