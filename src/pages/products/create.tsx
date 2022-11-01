import { HttpError } from "@pankod/refine-core";
import {
    Box,
    TextField,
    // Autocomplete,
    // useAutocomplete,
    Create,
} from "@pankod/refine-mui";
import { useForm, Controller } from "@pankod/refine-react-hook-form";

import { IProducts, ICategory } from "interfaces";

export const ProductCreate: React.FC = () => {
    const {
        refineCore: { formLoading },
        saveButtonProps,
        register,
        // control,
        formState: { errors },
    } = useForm<IProducts, HttpError, IProducts & { category: ICategory }>();

    // const { autocompleteProps } = useAutocomplete<ICategory>({
    //     resource: "categories",
    // });

    return (
        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("maMonAn", { required: "Mã món ăn là trường bắt buộc!" })}
                    error={!!errors?.maMonAn}
                    helperText={errors.maMonAn?.message}
                    margin="normal"
                    required
                    fullWidth
                    id="maMonAn"
                    label="Mã món ăn"
                    name="maMonAn"
                    autoFocus
                />
                <TextField
                    {...register("maDanhMuc", { required: "Mã danh mục là trường bắt buộc!" })}
                    error={!!errors?.maDanhMuc}
                    helperText={errors.maDanhMuc?.message}
                    margin="normal"
                    required
                    fullWidth
                    id="maDanhMuc"
                    label="Mã danh mục"
                    name="maDanhMuc"
                    autoFocus
                />
                <TextField
                    {...register("tenMonAn", { required: "Tên món ăn  là trường bắt buộc!" })}
                    error={!!errors?.tenMonAn}
                    helperText={errors.tenMonAn?.message}
                    margin="normal"
                    required
                    fullWidth
                    id="tenMonAn"
                    label="Tên món ăn"
                    name="tenMonAn"
                    autoFocus
                />
                <TextField
                    {...register("hinhAnhMonAn", { required: "Hình ảnh món ăn là trường bắt buộc!" })}
                    error={!!errors?.hinhAnhMonAn}
                    helperText={errors.hinhAnhMonAn?.message}
                    margin="normal"
                    required
                    fullWidth
                    id="hinhAnhMonAn"
                    label="Hình ảnh món ăn"
                    name="hinhAnhMonAn"
                    autoFocus
                />
                <TextField
                    {...register("moTaChiTiet", { required: "Mô tả chi tiết là trường bắt buộc!" })}
                    error={!!errors?.moTaChiTiet}
                    helperText={errors.moTaChiTiet?.message}
                    margin="normal"
                    required
                    fullWidth
                    id="moTaChiTiet"
                    label="Mô tả chi tiết"
                    name="moTaChiTiet"
                    autoFocus
                />
                <TextField
                    {...register("giaTien", { required: "Giá tiền là trường bắt buộc!" })}
                    error={!!errors?.giaTien}
                    helperText={errors.giaTien?.message}
                    margin="normal"
                    required
                    fullWidth
                    id="giaTien"
                    label="Giá tiền"
                    name="giaTien"
                    autoFocus
                />
                <TextField
                    {...register("yeuThich", { required: "Yêu thích là trường bắt buộc!" })}
                    error={!!errors?.yeuThich}
                    helperText={errors.yeuThich?.message}
                    margin="normal"
                    required
                    fullWidth
                    id="yeuThich"
                    label="Yêu thích"
                    name="yeuThich"
                    autoFocus
                />
            </Box>
        </Create>
    );
};
