import { HttpError, IResourceComponentsProps } from "@pankod/refine-core";
import {
    Box,
    TextField,
    FormHelperText,
    useAutocomplete,
    Create,
} from "@pankod/refine-mui";
import { useForm, Controller } from "@pankod/refine-react-hook-form";

import { IProducts, ICategory } from "interfaces";

export const CategoryCreate: React.FC<IResourceComponentsProps> = () => {
    const {
        // refineCore: { formLoading },
        saveButtonProps,
        register,
        control,
        formState: { errors },
    } = useForm<ICategory, HttpError, ICategory>();

    // const { autocompleteProps } = useAutocomplete<ICategory>({
    //     resource: "category",
    // });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("maDanhMuc", { required: "Mã món ăn là trường bắt buộc!" })}
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
                    {...register("tenDanhMuc", { required: "Tên danh mục là trường bắt buộc!" })}
                    error={!!errors?.tenDanhMuc}
                    helperText={errors.tenDanhMuc?.message}
                    margin="normal"
                    required
                    fullWidth
                    id="tenDanhMuc"
                    label="Tên danh mục"
                    name="tenDanhMuc"
                    autoFocus
                />
                <TextField
                    {...register("hinhAnh", { required: "Hình ảnh là trường bắt buộc!" })}
                    error={!!errors?.hinhAnh}
                    helperText={errors.hinhAnh?.message}
                    margin="normal"
                    required
                    fullWidth
                    id="hinhAnh"
                    label="Hình ảnh"
                    name="hinhAnh"
                    autoFocus
                />
            </Box>
        </Create>
    );
};