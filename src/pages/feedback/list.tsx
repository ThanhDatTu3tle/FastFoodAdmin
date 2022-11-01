import React from "react";
import { useMany } from "@pankod/refine-core";
import {
    useDataGrid,
    DataGrid,
    GridColumns,
    TagField,
    DateField,
    List,
} from "@pankod/refine-mui";

import { IFeedback, ICustomer } from "interfaces";

export const FeedbackList: React.FC = () => {
    const { dataGridProps } = useDataGrid<IFeedback>();

    const customerIds = dataGridProps.rows.map((item) => item.maKhachHang.maKhachHang);
    const { data: customersData, isLoading } = useMany<ICustomer>({
        resource: "customer",
        ids: customerIds,
        queryOptions: {
            enabled: customerIds.length > 0,
        },
    });

    const columns = React.useMemo<GridColumns<IFeedback>> (
      () => [
        {
            field: "maYKien",
            headerName: "Mã Ý kiến",
            type: "string",
            minWidth: 150,
            flex: 1,
            renderCell: function render(params) {
                return <TagField value={params.row.maYKien} />;
            },
        },
        {
            field: "maKhachHang.maKhachHang",
            headerName: "Mã khách hàng",
            type: "string",
            minWidth: 150,
            flex: 1,
            renderCell: function render({ row }) {
              if (isLoading) {
                  return "Loading...";
              }

              const customer = customersData?.data.find(
                  (item) => item.maKhachHang === row.maKhachHang.maKhachHang,
              );
              return customer?.hoTen;
            },
        },
        {
            field: "noiDung",
            headerName: "Nội dung",
            type: "string",
            minWidth: 150,
            flex: 1,
            renderCell: function render(params) {
                return <TagField value={params.row.noiDung} />;
            },
        },
        {
            field: "danhGia",
            headerName: "danhGia",
            type: "number",
            minWidth: 150,
            flex: 1,
            renderCell: function render(params) {
                return <TagField value={params.row.danhGia} />;
            },
        },
    ],
    [customersData, isLoading],
    )
     
    return (
        <List>
            <DataGrid {...dataGridProps} getRowId={(row) => row.maYKien} columns={columns} autoHeight />
        </List>
    );
};
