import { Routes, Route} from "react-router-dom"

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
                    path="/catalog/women"
                    element={
                        <MainWrapper>
                            <WomenCatalog />
                        </MainWrapper>
                    } 
                />
                <Route 
                    path="/catalog/men"
                    element={
                        <MainWrapper>
                            <MenCatalog />
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
