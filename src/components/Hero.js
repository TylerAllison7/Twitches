import React from "react";

const Hero = ({para}) => {
    console.log(para);
    return(
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src="../../public/images/miranda.jpeg"
                className="max-w-sm rounded-lg shadow-2xl"
                alt="Miranda looking out of frame." />
                <div>
                <p className="py-6">
                    Miranda Martine-DuBaer is the biological mother of Alex and Camryn, as well as the wife of Aron DuBaer. Following her husband's death, 
                    as well as her daughters' assumed deaths, Miranda lost all of her powers and left Coventry. Fourteen years later, Thantos 
                    informed her that they were alive, and she met them. After this, she returned to Coventry to reconnect with her homeland.
                </p>
                </div>
            </div>
        </div>      
    );
};

export default Hero;
