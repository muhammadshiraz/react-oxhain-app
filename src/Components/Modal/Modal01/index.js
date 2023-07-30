import React from 'react';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import QRBg from "../../../Assets/Images/LogIn/qr-bg.png";
import QR from "../../../Assets/Images/LogIn/qr.png";
import CrossIco from '../../../Assets/Icons/Modal/CrossIcon.png';

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

const Modal01 = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal onClick={closeFn} open={open} className="relative">
        <Box
            sx={style}
            className="flex flex-col items-center justify-center py-20"
        >
            <button type="button" className="absolute right-0 top-0 pr-3.5 pt-3.5" onClick={closeFn}><img src={CrossIco} alt="Are you sure want to delete all API keys" /></button>
            <div className="flex flex-col items-center justify-center bg-no-repeat bg-cover w-[300px] h-[300px] mb-5" style={{backgroundImage: `url(${QRBg})`}}>
                <img src={QR} width="250px" alt="QR" />
            </div>
            <h3 className={`text-[#000000de] font-medium text-xl`}>Oxhain web and scan QR code</h3>
            <div className="flex flex-row items-center justify-center mt-8">
                <button type="button" className="bg-[#FFFFFF] text-[#4949EE] border-solid border-[#4949EE] border-[1px] text-base font-medium rounded-sm w-[155px] h-10 mr-2">Cancel</button>
            </div>
        </Box>
    </Modal>
  );
};

export default Modal01;