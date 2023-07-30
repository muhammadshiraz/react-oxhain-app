import React from "react";
import InfoIco from '../../../../Assets/Images/AboutUs/Ecosystem/info-ico.png';

const InfoIcon = () => {
    return (
        <div className="flex flex-col justify-center">
            <img src={InfoIco} alt="Info"/>
        </div>
    );
};

export default InfoIcon;