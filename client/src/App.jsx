import { Routes, Route } from "react-router-dom"

import { NotFound } from "./components/NotFound/NotFound"
import { MainWrapper } from "./components/MainWrapper/MainWrapper"
import { Home } from "./components/Home/Home"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { WomenCatalog } from "./components/Catalog/WomenCatalog/WomenCatalog"
import { MenCatalog } from "./components/Catalog/MenCatalog/MenCatalog"
import { Catalog } from "./components/Catalog/Catalog"
import { Login } from "./components/Login/Login"
import { Register } from "./components/Register/Register"
import { ResetPassword } from "./components/ResetPassword/ResetPassword"
import { Profile } from "./components/Profile/Profile";
import { Settings } from "./components/Settings/Settings";
import { PurchaseHistory } from "./components/PurchaseHistory/PurchaseHistory";
import { Wishlist } from "./components/Wishlist/Wishlist";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { SeedDb } from "./seeder/ProductsSeeder"

function App() {
    //TODO: Attribute the photographers and Unsplash for the photos
    return (
        <div className="App">
            <Routes>
                <Route
                    path="*"
                    element={<NotFound />}
                />
                //TODO: Change about to catalog
                <Route
                    path="/"
                    element={
                        <MainWrapper>
                            <Home />
                        </MainWrapper>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <MainWrapper>
                            <About />
                        </MainWrapper>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <MainWrapper>
                            <Contact />
                        </MainWrapper>
                    }
                />
                //TODO: Finish
                <Route
                    path="/catalog"
                    element={
                        <MainWrapper>
                            <Catalog />
                        </MainWrapper>
                    }
                />
                //TODO: Finish
                <Route
                    path="/catalog/women"
                    element={
                        <MainWrapper>
                            <WomenCatalog />
                        </MainWrapper>
                    }
                />
                //TODO: Finish
                <Route
                    path="/catalog/men"
                    element={
                        <MainWrapper>
                            <MenCatalog />
                        </MainWrapper>
                    }
                />
                {/* //TODO: Finish
                <Route
                    path="/catalog/elegant-everyday"
                    element={
                        <MainWrapper>
                            <Catalog />
                        </MainWrapper>
                    }
                />
                <Route
                    path="/catalog/elegant-everyday/women"
                    element={
                        <MainWrapper>
                            <Catalog />
                        </MainWrapper>
                    }
                />
                <Route
                    path="/catalog/elegant-everyday/men"
                    element={
                        <MainWrapper>
                            <Catalog />
                        </MainWrapper>
                    }
                /> */}
                //TODO: Finish
                <Route
                    path="/user"
                    element={
                        <MainWrapper>
                            <Profile />

                        </MainWrapper>
                    }
                />
                //TODO: Finish
                <Route
                    path="/user/wishlist"
                    element={
                        <MainWrapper>
                            <Wishlist />
                        </MainWrapper>
                    }
                />
                //TODO: Finish
                <Route
                    path="/user/shopping-cart"
                    element={
                        <MainWrapper>
                            <ShoppingCart />
                        </MainWrapper>
                    }
                />
                //TODO: Finish
                <Route
                    path="/user/purchase-history"
                    element={
                        <MainWrapper>
                            <PurchaseHistory />
                        </MainWrapper>
                    }
                />
                //TODO: Finish
                <Route
                    path="/user/settings"
                    element={
                        <MainWrapper>
                            <Settings />
                        </MainWrapper>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Login />
                    }
                />
                <Route
                    path="/login/reset-password"
                    element={
                        <ResetPassword />
                    }
                />
                <Route
                    path="/register"
                    element={
                        <Register />
                    }
                />
            </Routes>
        </div>
    )
}

export default App
