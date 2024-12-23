import {BrowserRouter, Routes,Route} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../screens/Home.jsx";
import About from "../screens/About.jsx";
import Products from "../screens/Products.jsx";
import '../styles/main.css'


function Main() {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                    </Route>
                </Routes>
            </BrowserRouter>
    )
}

export default Main