import React from "react";
import { useMany } from "@pankod/refine-core";
import {
    useDataGrid,
    DataGrid,
    GridColumns,
    TagField,
    // DateField,
    List,
    // ShowButton,
} from "@pankod/refine-mui";

import { IAddress, ICustomer } from "interfaces";

export const AddressList: React.FC = () => {
    const { dataGridProps } = useDataGrid<IAddress>();

    const customerIds = dataGridProps.rows.map((item) => item.maKhachHang.maKhachHang);
    const { data: customerData, isLoading } = useMany<ICustomer>({
        resource: "customer",
        ids: customerIds,
        queryOptions: {
            enabled: customerIds.length > 0,
        },
    });

    const columns = React.useMemo<GridColumns<IAddress>>(
        () => [
            {
                field: "maDiaChi",
                headerName: "Mã địa chỉ",
                type: "string",
                minWidth: 100,
                flex: 1,
                renderCell: function render(params) {
                    return <TagField value={params.row.maDiaChi} />;
                },
            },
            {
                field: "maKhachHang.maKhachHang",
                headerName: "Tên khách hàng",
                type: "string",
                minWidth: 150,
                flex: 1,
                renderCell: function render({ row }) {
                    if (isLoading) {
                        return "Loading...";
                    }

                    const customer = customerData?.data.find(
                        (item) => item.maKhachHang === row.maKhachHang.maKhachHang,
                    );
                    return customer?.hoTen;
                },
            },
            {
                field: "diaChi",
                headerName: "Địa chỉ",
                type: "string",
                minWidth: 350,
                flex: 1,
                renderCell: function render(params) {
                    return <TagField value={params.row.diaChi} />;
                },
            },
            {
                field: "tenDiaChi",
                headerName: "Tên địa chỉ",
                type: "string",
                minWidth: 150,
                flex: 1,
                renderCell: function render(params) {
                    return <TagField value={params.row.tenDiaChi} />;
                },
            },
        ],
        [customerData, isLoading],
    ); 

    return (
        <List>
            <DataGrid {...dataGridProps} getRowId={(row) => row.maDiaChi} columns={columns} autoHeight />
        </List>
    );
};
