import React from "react";
import { Link } from "react-router-dom";
const Nav=()=>{

    return(
        <div id="navblk">

        <nav>
            <div className="logo">Logo</div>
            <div className="menu">
                <ol>
                    <li>
                   <Link to ={"/product"} >Product</Link>
                   </li>


                   <li>
                   <Link to ={"/cart"}>Cart</Link>
                   </li>

                   
                </ol>
            </div>
        </nav>
        </div>
    )
}
export default Nav;