import React from "react";
import "./header.css"

const Header = ({headTitle, expandHeader}) =>{
    return (
        <div className="header-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                 alt="header"
//backtick under the escape button
            className={`head-img ${expandHeader ? `head-img-expanded ` : `head-img-contracted`}`}
             />
            <h1 className = {`header-text ${expandHeader ? `head-text-expanded ` : `head-text-contracted`}`}
            >
            Name It</h1>
        </div>
    )
}


export default Header;