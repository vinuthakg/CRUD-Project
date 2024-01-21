import React from "react";
import Nav from "./components/Nav"
import "./global.css"
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Product from "./components/Product";
import Cart from "./components/Cart";
import Update from "./components/Update";

const App=()=>{
    return(
        <div>
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/update/:id" element={<Update/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default App;