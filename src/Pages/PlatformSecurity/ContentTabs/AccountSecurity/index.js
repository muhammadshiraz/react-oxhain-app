import React from 'react';
import Title01 from '../../../../Components/Title/Title01';

const AccountSecurityTab = () => {
    return (
        <>
            <div className='container'>
                <Title01 className="block text-center mb-4">Account Security</Title01>
                <p className='md:w-7/12 mx-auto text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tempus sed dictum at. Parturient risus nullam
                    lobortisnunc,habitasse lacus. Magnis ut dolor viverra amet, et lacus quis. </p>
            </div>

            <div className='flex flex-col pb-16 text-base px-4'>
                <div className="flex flex-row flex-wrap justify-start lg:justify-between mt-24">
                    <div className="flex flex-col items-center w-full mb-12 lg:mt-0 lg:w-2/12 lg:mr-4">
                        <div className="w-28 h-28 md:w-20 md:h-20 bg-gray-200 rounded-full"></div>
                        <span className="mt-3 !font-medium">SMS</span>
                    </div>
                    <div className="flex flex-col items-center w-full mb-12 lg:mt-0 lg:w-2/12 lg:mr-4">
                        <div className="w-28 h-28 md:w-20 md:h-20 bg-gray-200 rounded-full"></div>
                        <span className="mt-3 !font-medium">Google OTP</span>
                    </div>
                    <div className="flex flex-col items-center w-full mb-12 lg:mt-0 lg:w-2/12 lg:mr-4">
                        <div className="w-28 h-28 md:w-20 md:h-20 bg-gray-200 rounded-full"></div>
                        <span className="mt-3 !font-medium">IP Address Monitoring</span>
                    </div>
                    <div className="flex flex-col items-center w-full mb-12 lg:mt-0 lg:w-2/12 lg:mr-4">
                        <div className="w-28 h-28 md:w-20 md:h-20 bg-gray-200 rounded-full"></div>
                        <span className="mt-3 !font-medium">Withdrawal Whitelist</span>
                    </div>
                    <div className="flex flex-col items-center w-full mb-12 lg:mt-0 lg:w-2/12 lg:mr-4">
                        <div className="w-28 h-28 md:w-20 md:h-20 bg-gray-200 rounded-full"></div>
                        <span className="mt-3 !font-medium">Login Password</span>
                    </div>

                    <div className="flex flex-col items-center w-full mb-12 lg:mt-16 lg:w-2/12 lg:ml-12 lg:mr-4">
                        <div className="w-28 h-28 md:w-20 md:h-20 bg-gray-200 rounded-full"></div>
                        <span className="mt-3 !font-medium">Email Address</span>
                    </div>
                    <div className="flex flex-col items-center w-full mb-12 lg:mt-16 lg:w-2/12 lg:mr-4">
                        <div className="w-28 h-28 md:w-20 md:h-20 bg-gray-200 rounded-full"></div>
                        <span className="mt-3 !font-medium">Gate UKey/Yubikey</span>
                    </div>
                    <div className="flex flex-col items-center w-full mb-12 lg:mt-16 lg:w-2/12 lg:mr-4">
                        <div className="w-28 h-28 md:w-20 md:h-20 bg-gray-200 rounded-full"></div>
                        <span className="mt-3 !font-medium">Security Log</span>
                    </div>
                    <div className="flex flex-col items-center w-full mb-12 lg:mt-16 lg:w-2/12 lg:mr-4">
                        <div className="w-28 h-28 md:w-20 md:h-20 bg-gray-200 rounded-full"></div>
                        <span className="mt-3 !font-medium">Fund Password</span>
                    </div>
                    <div className="flex flex-col items-center w-full mb-12 lg:mt-16 lg:w-2/12 lg:mr-12">
                        <div className="w-28 h-28 md:w-20 md:h-20 bg-gray-200 rounded-full"></div>
                        <span className="mt-3 !font-medium">Anti-Phishing Code</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountSecurityTab;