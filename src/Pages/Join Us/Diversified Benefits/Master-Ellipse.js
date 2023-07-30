import React from "react";
import OxhainLogo from '../../../Assets/Images/JoinUs/DiversifiedBenefits/oxhain-logo.svg';

const MasterEllipse = () => {
    return (
        <div id="divBenefitsEllipse" className="flex justify-center">
            <div id="nestedDivBenefitsEllipse" className="flex flex-col justify-center">
                <img src={OxhainLogo} alt="Diversified Benefits" width="230px" className="mx-auto" />
            </div>
        </div>
    );
};

export default MasterEllipse;