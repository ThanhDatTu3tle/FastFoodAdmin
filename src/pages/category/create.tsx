import { HttpError, useApiUrl, useTranslate, IResourceComponentsProps } from "@pankod/refine-core";
import {
    Box,
    Grid,
    Stack,
    FormControl,
    FormLabel,
    TextField,
    FormHelperText,
    // Autocomplete,
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
            <form>
              <Grid
                container
                marginTop="8px"
                sx={{
                    marginX: { xs: "0px" },
                    paddingX: { xs: 1, md: 4 },
                }}
              >
                <Grid item xs={12} md={4}>
                        <Stack gap="24px">
                            <FormControl>
                                <FormLabel
                                    required
                                    sx={{
                                        marginBottom: "8px",
                                        fontWeight: "700",
                                        fontSize: "14px",
                                        color: "text.primary",
                                    }}
                                >
                                    {("Mã danh mục")}
                                </FormLabel>
                                <TextField
                                    {...register("maDanhMuc")}
                                    size="small"
                                    margin="none"
                                    variant="outlined"
                                />
                                {errors.maDanhMuc && (
                                    <FormHelperText error>
                                        {errors.maDanhMuc.message}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            
                            <FormControl>
                                <FormLabel
                                    required
                                    sx={{
                                        marginBottom: "8px",
                                        fontWeight: "700",
                                        fontSize: "14px",
                                        color: "text.primary",
                                    }}
                                >
                                    {("Tên danh mục")}
                                </FormLabel>
                                <TextField
                                    {...register("tenDanhMuc")}
                                    size="small"
                                    margin="none"
                                    variant="outlined"
                                />
                                {errors.tenDanhMuc && (
                                    <FormHelperText error>
                                        {errors.tenDanhMuc.message}
                                    </FormHelperText>
                                )}
                            </FormControl>

                            <FormControl>
                                <FormLabel
                                    required
                                    sx={{
                                        marginBottom: "8px",
                                        fontWeight: "700",
                                        fontSize: "14px",
                                        color: "text.primary",
                                    }}
                                >
                                    {("Hình ảnh danh mục")}
                                </FormLabel>
                                <TextField
                                    {...register("hinhAnh")}
                                    size="small"
                                    margin="none"
                                    variant="outlined"
                                />
                                {errors.hinhAnh && (
                                    <FormHelperText error>
                                        {errors.hinhAnh.message}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Stack>
                    </Grid>
              </Grid>
            </form>
        </Create>
    );
};