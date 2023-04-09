import { Routes, Route } from "react-router-dom"

import { NotFound } from "./components/NotFound/NotFound"
import { MainWrapper } from "./components/MainWrapper/MainWrapper"
import { Home } from "./components/Home/Home"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Catalog } from "./components/Catalog/Catalog"
import { Login } from "./components/Login/Login"
import { Register } from "./components/Register/Register"
import { ResetPassword } from "./components/ResetPassword/ResetPassword"
import { Settings } from "./components/Settings/Settings";
import { OrderHistory } from "./components/OrderHistory/OrderHistory";
import { Wishlist } from "./components/Wishlist/Wishlist";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { Product } from "./components/Product/Product"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="*"
                    element={<NotFound />}
                />
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
                <Route
                    path="/catalog"
                    element={
                        <MainWrapper>
                            <Catalog />
                        </MainWrapper>
                    }
                />
                <Route
                    path="/catalog/:filter"
                    element={
                        <MainWrapper>
                            <Catalog />
                        </MainWrapper>
                    }
                />
                <Route
                    path="/catalog/:collection/:productId"
                    element={
                        <MainWrapper>
                            <Product />
                        </MainWrapper>
                    }
                />
                <Route
                    path="/user/wishlist"
                    element={
                        <MainWrapper>
                            <Wishlist />
                        </MainWrapper>
                    }
                />
                <Route
                    path="/user/shopping-cart"
                    element={
                        <MainWrapper>
                            <ShoppingCart />
                        </MainWrapper>
                    }
                />
                <Route
                    path="/user/order-history"
                    element={
                        <MainWrapper>
                            <OrderHistory />
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
