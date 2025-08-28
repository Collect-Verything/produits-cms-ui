import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ShopHome from "./pages/shop/shop-home/ShopHome";
import ShopCategory from "./pages/shop/shop-category/ShopCategory";
import ShopContact from "./pages/shop/shop-contact/ShopContact";
import ShopRegister from "./pages/shop/shop-register/ShopRegister";
import ShopLogin from "./pages/shop/shop-login/ShopLogin";
import {AuthProvider} from "./context/FakeAuth";
import ClientPanier from "./pages/client/client-panier/ClientPanier";
import ClientProfile from "./pages/client/client-profile/ClientProfile";
import AdminHome from "./pages/admin/admin-home/AdminHome";
import AdminStockHome from "./pages/admin/admin-stock/admin-stock-home/AdminStockHome";
import AdminThemeHome from "./pages/admin/admin-theme/admin-theme-home/AdminThemeHome";
import {ThemeProvider} from "./context/Theme";
import AdminClient from "./pages/admin/admin-client/AdminClient";


function App() {


  return (
    <>
        <ThemeProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        {/* SHOP */}
                        <Route path="/" element={<ShopHome/>}/>
                        <Route path="category" element={<ShopCategory/>}/>
                        <Route path="contact" element={<ShopContact/>}/>
                        <Route path="register" element={<ShopRegister/>}/>
                        <Route path="login" element={<ShopLogin/>}/>
                        <Route path="panier" element={<ClientPanier/>}/>
                        <Route path="profile" element={<ClientProfile/>}/>
                        {/* ADMIN */}
                        <Route path="admin" element={<AdminHome/>}/>
                        <Route path="admin/stock" element={<AdminStockHome/>}/>
                        <Route path="admin/theme" element={<AdminThemeHome/>}/>
                        <Route path="admin/client" element={<AdminClient/>}/>

                        {/* TODO : Regler probleme nested route*/}
                        {/*<Route path="admin" element={<AdminHome/>}>*/}
                        {/*    <Route path="stock" element={<AdminStockHome/>}/>*/}
                        {/*    <Route path="theme" element={<AdminThemeHome/>}/>*/}
                        {/*</Route>*/}
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </ThemeProvider>
    </>
  );
}

export default App;
