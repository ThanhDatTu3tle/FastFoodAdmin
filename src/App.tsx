import { Refine } from "@pankod/refine-core";
import {
    Layout,
    ErrorComponent,
    ReadyPage,
    LightTheme,
    CssBaseline,
    ThemeProvider,
    GlobalStyles,
    RefineSnackbarProvider,
    notificationProvider,
} from "@pankod/refine-mui";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import { ProductList, ProductShow, ProductCreate } from 'pages/products';
import { CategoryList, CategoryCreate } from 'pages/category';

const API_URL = "http://localhost:3001";
const App: React.FC = () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <CssBaseline />
            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
            <RefineSnackbarProvider>
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider(API_URL)}
                    notificationProvider={notificationProvider}
                    Layout={Layout}
                    ReadyPage={ReadyPage}
                    catchAll={<ErrorComponent />}
                    resources={[
                        { 
                            name: "products", 
                            list: ProductList, 
                            show: ProductShow, 
                            // edit: PostEdit, 
                            create: ProductCreate, 
                            // canDelete: true 
                        },
                        { 
                            name: "category", 
                            list: CategoryList, 
                            // show: PostShow, 
                            // edit: PostEdit, 
                            create: CategoryCreate, 
                            // canDelete: true 
                        },
                    ]}
                />
            </RefineSnackbarProvider>
        </ThemeProvider>
    );
};

export default App;
