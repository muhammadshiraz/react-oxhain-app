import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {ReactComponent as WarningIco} from '../../../../Assets/Icons/Dashboard/TabsPanel/APIManagement/Warning.svg';
import CrossIco from '../../../../Assets/Icons/Dashboard/TabsPanel/APIManagement/CrossIcon.png';
import {
    DashboardControlSection,
} from '../../Dashboard.styled';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    bgcolor: "#FFFFFF",
    boxShadow: 24,
    zIndex: "999999",
};

const APIManagement = () => {
    const currentTheme = window.localStorage.getItem('theme');
    const [isActive, setActive] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleActiveButtons(id) {
        setActive(id);
        if(id === "1") {
            setOpen(true);
        }
    }

    return (
        <DashboardControlSection className="flex flex-col w-full apimanagement-control-section py-10 font-prompt px-28">
            <div className="flex flex-row items-end justify-end">
                <button type="button" onClick={(e) => handleActiveButtons(e.target.id)} id="0" className={`${isActive === "0" ? "active" : ""} bg-[#4949EE] text-white text-base font-medium rounded-sm w-max h-10 mr-3.5 px-6`}>Create API</button>
                <button type="button" onClick={(e) => handleActiveButtons(e.target.id)} id="1" className={`${isActive === "1" ? "active" : ""} bg-[#4949EE] text-white text-base font-medium rounded-sm w-max h-10 mr-3.5 px-6`}>Delete All API</button>
                <button type="button" onClick={(e) => handleActiveButtons(e.target.id)} id="2" className={`${isActive === "2" ? "active" : ""} bg-[#4949EE] text-white text-base font-medium rounded-sm w-max h-10 px-6`}>Create Tax Report API</button>
            </div>
            <div className="flex flex-col items-start justify-start mt-24">
                <ol className="text-left">
                    <li className="list-decimal text-xl	font-light text5 mb-1">Each acoount can create up to 30 API Keys.</li>
                    <li className="list-decimal text-xl	font-light text5 mb-1">Don’t disclose your Api Key to anyone to avoid asset losses. It is recommended  to bind IP for Api Key to increase your acoount security.</li>
                    <li className="list-decimal text-xl	font-light text5 mb-1">Be aware that your API Key may be disclosed by authorizing it to a third-party platform.</li>
                    <li className="list-decimal text-xl	font-light text5">You will not be able to create an API if KYC is not completed.</li>
                </ol>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                className="relative apiModal"
            >
                <Box
                    sx={style}
                    className="flex flex-col items-center justify-center py-20"
                >
                    <button type="button" className="absolute right-0 top-0 pr-3.5 pt-3.5" onClick={handleClose}><img src={CrossIco} alt="Are you sure want to delete all API keys" /></button>
                    <WarningIco />
                    <h3 className={`text-[#000000de] font-medium text-xl`}>Are you sure want to delete all API keys?</h3>
                    <div className="flex flex-row items-center justify-center mt-8">
                        <button type="button" className="bg-[#FFFFFF] text-[#4949EE] border-solid border-[#4949EE] border-[1px] text-base font-medium rounded-sm w-[155px] h-10 mr-2">Cancel</button>
                        <button type="button" className="bg-[#4949EE] text-white text-base font-medium rounded-sm w-[155px] h-10 ml-2">Confirm</button>
                    </div>
                </Box>
            </Modal>
        </DashboardControlSection>
    );
};

export default APIManagement;