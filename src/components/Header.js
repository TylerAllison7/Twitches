import React from "react";

const Header = ({backgroundPic, fontFamily}) => {
    console.log(backgroundPic);
    return(
        <header
            className="header text-center py-8 bg-cover bg-center text-white"
            style={{ backgroundImage: `url(../../public/images/${backgroundPic})` }}
        >
            <h1
                className="text-gx1 font-bolder"
            >
                Twitches Movie Information
            </h1>
            <p className="text-lg">
                Learn about the iconic halloween movie "Twitches," made by Disney in 2005.
            </p>
        </header>
    );
}

export default Header;