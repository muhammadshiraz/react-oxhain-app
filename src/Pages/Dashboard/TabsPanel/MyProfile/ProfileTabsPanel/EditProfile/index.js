import React from 'react';
import EditProfilePic from '../../../../../../Assets/Icons/Dashboard/TabsPanel/EditProfile/edit-profile-pic.png';
import EditProfileIco from '../../../../../../Assets/Icons/Dashboard/TabsPanel/EditProfile/edit-profile-ico.png';
import Box from '@mui/material/Box';
import {
    DashBoxText,
    DashTextField01, 
} from '../../../../Dashboard.styled';

const EditProfile = () => {
    
    return (
        <div id="editProfile" className='flex flex-col w-full items-center justify-center mt-10'>
            <h3 className='text-left font-prompt text-3xl font-semibold w-full pl-16'>Edit Profile</h3>
            <div className='flex flex-col items-center jusitify-center mt-12 mb-36'>
                <div className='flex flex-col relative'>
                    <img src={EditProfilePic} alt="Profile Pic" width={130}/> 
                    <button type='button' id='editProfileBtn' className='absolute bottom-0 right-0 flex justify-center items-center w-[30px] h-[30px] rounded-full'><img src={EditProfileIco} alt="Edit Profile Ico"/></button>
                </div>
                <Box 
                    className='flex flex-col min-w-[560px] mx-auto mt-14'
                    component="form"
                >
                    <div className='flex flex-row w-full mb-3.5'>
                        <div className='flex flex-col w-full mr-5'>
                            <DashBoxText className="font-prompt font-medium text-base mb-2 text-left">First Name</DashBoxText>
                            <DashTextField01 type="text" className='w-full h-[45px] rounded-sm px-2 text-sm' />
                        </div>
                        <div className='flex flex-col w-full ml-5'>
                            <DashBoxText className="font-prompt font-medium text-base mb-2 text-left">First Name</DashBoxText>
                            <DashTextField01 type="text" className='w-full h-[45px] rounded-sm px-2 text-sm' />
                        </div>
                    </div>
                    <div className='flex flex-col w-full mb-3.5'> 
                        <DashBoxText className="font-prompt font-medium text-base mb-2 text-left">Email</DashBoxText>
                        <DashTextField01 type="email" className='w-full h-[45px] rounded-sm px-2 text-sm' />
                    </div>
                    <div className='flex flex-col w-full mb-3.5'> 
                        <DashBoxText className="font-prompt font-medium text-base mb-2 text-left">Contacts Number</DashBoxText>
                        <DashTextField01 type="tel" className='w-full h-[45px] rounded-sm px-2 text-sm' />
                    </div>
                    <div className='flex flex-col w-full mb-3.5'> 
                        <DashBoxText className="font-prompt font-medium text-base mb-2 text-left">Address</DashBoxText>
                        <DashTextField01 type="text" className='w-full h-[45px] rounded-sm px-2 text-sm' />
                    </div>
                    <div className='flex flex-row w-full mb-3.5'>
                        <div className='flex flex-col w-full mr-5'>
                            <DashBoxText className="font-prompt font-medium text-base mb-2 text-left">City</DashBoxText>
                            <DashTextField01 type="text" className='w-full h-[45px] rounded-sm px-2 text-sm' />
                        </div>
                        <div className='flex flex-col w-full ml-5'>
                            <DashBoxText className="font-prompt font-medium text-base mb-2 text-left">State</DashBoxText>
                            <DashTextField01 type="text" className='w-full h-[45px] rounded-sm px-2 text-sm' />
                        </div>
                    </div>
                    <div className='flex flex-row w-full mb-3.5'>
                        <div className='flex flex-col w-full mr-5'>
                            <DashBoxText className="font-prompt font-medium text-base mb-2 text-left">Zip Code</DashBoxText>
                            <DashTextField01 type="text" className='w-full h-[45px] rounded-sm px-2 text-sm' />
                        </div>
                        <div className='flex flex-col w-full ml-5'>
                            <DashBoxText className="font-prompt font-medium text-base mb-2 text-left">Country</DashBoxText>
                            <DashTextField01 type="text" className='w-full h-[45px] rounded-sm px-2 text-sm' />
                        </div>
                    </div>
                    <div className='flex flex-col w-full'> 
                        <DashBoxText className="font-prompt font-medium text-base mb-2 text-left">Password</DashBoxText>
                        <DashTextField01 type="password" className='w-full h-[45px] rounded-sm px-2 text-sm' />
                    </div>
                    <div className='flex flex-row mt-12'>
                        <button type='button' className='capitalize w-[185px] h-[45px] rounded-sm bg-[#4949EE] text-[#FFFFFF] text-lg font-prompt font-medium'>Save</button>
                    </div>
                </Box>
            </div>
        </div>
    );
};

export default EditProfile;