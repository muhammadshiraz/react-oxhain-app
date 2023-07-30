import React from 'react';
import Box from '@mui/material/Box';
import {
    DashBoxText,
    DashTextField01, 
} from '../../../../Dashboard.styled';

const Password = () => {
    
    return (
        <div id="Password" className='flex flex-col w-full items-center justify-center mt-10'>
            <div className='flex flex-col w-full pl-16'>
                <h3 className='text-left font-prompt text-3xl font-semibold mb-2.5'>Password</h3>
                <p className='text4 font-prompt font-light text-xl text-left'>Enter a new password below to change your password.</p>
            </div>
            <div className='flex flex-col items-center jusitify-center mt-12 mb-36'>
                <Box 
                    className='flex flex-col min-w-[560px] mx-auto mt-14'
                    component="form"
                >
                    <div className='flex flex-col w-full mb-5'> 
                        <DashBoxText className="font-prompt font-medium text-base mb-2 text-left">Current Password</DashBoxText>
                        <DashTextField01 type="password" className='w-full h-[45px] rounded-sm px-2 text-sm' />
                    </div>
                    <div className='flex flex-col w-full mb-5'> 
                        <DashBoxText className="font-prompt font-medium text-base mb-2 text-left">New Password</DashBoxText>
                        <DashTextField01 type="password" className='w-full h-[45px] rounded-sm px-2 text-sm' />
                    </div>
                    <div className='flex flex-col w-full mb-5'> 
                        <DashBoxText className="font-prompt font-medium text-base mb-2 text-left">Re-enter New Password</DashBoxText>
                        <DashTextField01 type="password" className='w-full h-[45px] rounded-sm px-2 text-sm' />
                    </div>
                    <div className='flex flex-row mt-3'>
                        <button type='button' className='capitalize w-[195px] h-[45px] rounded-sm bg-[#4949EE] text-[#FFFFFF] text-base font-prompt font-medium'>Change Password</button>
                    </div>
                </Box>
            </div>
        </div>
    );
};

export default Password;