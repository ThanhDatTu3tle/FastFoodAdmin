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

import { ProductList } from 'pages/products';

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
                    resources={[{ 
                        name: "products", 
                        list: ProductList, 
                        // show: PostShow, 
                        // edit: PostEdit, 
                        // create: PostCreate, 
                        // canDelete: true 
                    }]}
                />
            </RefineSnackbarProvider>
        </ThemeProvider>
    );
};

export default App;
