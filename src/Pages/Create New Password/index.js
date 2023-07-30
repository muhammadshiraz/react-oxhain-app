import React from 'react';
import CreateNewPasswordImage from '../../Assets/Images/CreateNewPassword/CreateNewPassword.jpg';
import Box from '@mui/material/Box';
import ForgotPassword from "../../Components/Forgot Password";
import HaveAnAccount from "../../Components/Have An Account";
import OxhainPasswordlField from '../../Components/Password field';
import Button from "../../Components/Button/Button01";
import {
    OxhainCreateNewPassword,
    GradientText,
    Title,
    Paragraph,
} from "./CreateNewPassword.styled";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1024,    
    bgcolor: '#FFFFFF',
    boxShadow: 24,
};

const CreateNewPassword = () => {

    React.useEffect(() => {
        document.getElementById("header").style.display="none";
        document.getElementById("footer").style.display="none";
    }, []);

    return (
        <OxhainCreateNewPassword className='flex flex-row h-screen'>
            <div className='flex'><img src={CreateNewPasswordImage} className="h-full" alt="Log In" /></div>
            <div className='flex flex-col bg-[#FFFFFF] w-full justify-center relative'>
                <HaveAnAccount />
                <div className='flex flex-col text-left w-[630px] mx-auto'
                    style={{
                        zoom: 0.78,
                    }}
                >
                    <Title className='text-5xl font-medium font-prompt mb-[10px]'>Create New Password</Title>
                    <Paragraph className='text-base font-normal font-prompt mb-[30px]'>Your new password must be different from previous used passwords.</Paragraph>
                    <Paragraph className='text-base font-light font-prompt mb-[45px]'>Password must have at least <span className='text-[#B721FF]'>8 characters</span>, <span className='text-[#B721FF]'>1 lowercase</span>, <br/> <span className='text-[#B721FF]'>1 upper case</span>, <span className='text-[#B721FF]'>1 number and 1 special character.</span></Paragraph>
                    <Box 
                        component="form"
                        className='flex flex-col'
                    >
                        <div className='flex flex-row mb-3 w-full'>
                            <OxhainPasswordlField label="Password" placeholder="Password" />
                        </div>
                        <div className='flex flex-row mb-3 w-full'>
                            <OxhainPasswordlField label="Confirm Password" placeholder="Confirm Password" />
                        </div>
                        
                        <div className="pt-10 w-[275px]"><Button text="Reset password" x="275" y="55" /></div>
                        <ForgotPassword />
                    </Box>
                </div>
            </div>
        </OxhainCreateNewPassword>
    );
};

export default CreateNewPassword;