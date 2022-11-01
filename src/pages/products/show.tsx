import { useOne, useShow } from "@pankod/refine-core";
import { Show, Stack, Typography, TagField } from "@pankod/refine-mui";

import { ICategory, IProducts } from "interfaces";

export const ProductShow: React.FC = () => {
    const { queryResult } = useShow<IProducts>();

    const { data, isLoading } = queryResult;
    const record = data?.data;

    const { data: categoryData } = useOne<ICategory>({
        resource: "category",
        id: record?.maDanhMuc.maDanhMuc || "",
        queryOptions: {
            enabled: !!record?.maDanhMuc.maDanhMuc,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Stack gap={1}>
                <Typography variant="body1" fontWeight="bold">
                    Mã món ăn
                </Typography>
                <Typography variant="body2">{record?.maMonAn}</Typography>

                <Typography variant="body1" fontWeight="bold">
                    Mã danh mục
                </Typography>
                <Typography variant="body2">
                    {categoryData?.data.tenDanhMuc}
                </Typography>

                <Typography variant="body1" fontWeight="bold">
                    Tên món ăn
                </Typography>
                <Typography variant="body2">
                    <TagField value={record?.tenMonAn} />
                </Typography>

                <Typography variant="body1" fontWeight="bold">
                    Hình ảnh món ăn
                </Typography>
                <Typography variant="body2">
                    <TagField value={record?.hinhAnhMonAn} />
                </Typography>

                <Typography variant="body1" fontWeight="bold">
                    Mô tả chi tiết
                </Typography>
                <Typography variant="body2">
                    <TagField value={record?.moTaChiTiet} />
                </Typography>

                <Typography variant="body1" fontWeight="bold">
                    Giá tiền
                </Typography>
                <Typography variant="body2">
                    <TagField value={record?.giaTien} />
                </Typography>
            </Stack>
        </Show>
    );
};