import React from 'react';
import Title01 from '../../../../Components/Title/Title01';

const PlatformSecurityTab = () => {
    return (
        <>
            <div className='container'>
                <Title01 className="block text-center mb-12 !font-semibold">Platform Security</Title01>
                <Title01 className="block text-left mb-12 !font-medium text-xl">System Security</Title01>
            </div>

            <div className='platform-security-tab flex flex-col'>
                <div className='container'>
                    <div className='flex flex-col xl:flex-row'>
                        <div className='platform-security-tab-item flex flex-col lg:flex-row flex-1 p-10 py-16 mb-16 !ml-0 mr-3 lg:mr-10'>
                            <div className='w-72'></div>
                            <div className='text-left'>
                                <span className='block mb-4 text-lg !font-normal'>Self-Developed Trading System</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tortor sem risus in lacus, mi ipsum risus id. Sit proin mauris
                                    aliquam ullamcorper maecenas dolor.</p>
                            </div>
                        </div>
                        <div className='platform-security-tab-item flex flex-col lg:flex-row flex-1 p-10 py-16 mb-16 !ml-0 mr-3 lg:ml-10'>
                            <div className='w-72'></div>
                            <div className='text-left'>
                                <span className='block mb-4 text-lg !font-normal'>Third-Party Cloud Security Defense Services</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tortor sem risus in lacus, mi ipsum risus id. Sit proin mauris
                                    aliquam ullamcorper maecenas dolor.</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col xl:flex-row'>
                        <div className='platform-security-tab-item flex flex-col lg:flex-row flex-1 p-10 py-16 mb-16 !ml-0 mr-3 lg:mr-10'>
                            <div className='w-72'></div>
                            <div className='text-left'>
                                <span className='block mb-4 text-lg !font-normal'>Encrypted Transport Layer. Secure Connection </span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tortor sem risus in lacus, mi ipsum risus id. Sit proin mauris
                                    aliquam ullamcorper maecenas dolor.</p>
                            </div>
                        </div>
                        <div className='platform-security-tab-item flex flex-col lg:flex-row flex-1 p-10 py-16 mb-16 !ml-0 mr-3 lg:ml-10'>
                            <div className='w-72'></div>
                            <div className='text-left'>
                                <span className='block mb-4 text-lg !font-normal'>Anti-DDOS Attack</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tortor sem risus in lacus, mi ipsum risus id. Sit proin mauris
                                    aliquam ullamcorper maecenas dolor.</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col xl:flex-row'>
                        <div className='platform-security-tab-item flex flex-col lg:flex-row flex-1 p-10 py-16 mb-16 !ml-0 mr-3 lg:mr-10'>
                            <div className='w-72'></div>
                            <div className='text-left'>
                                <span className='block mb-4 text-lg !font-normal'>WAF Protection System</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tortor sem risus in lacus, mi ipsum risus id. Sit proin mauris
                                    aliquam ullamcorper maecenas dolor.</p>
                            </div>
                        </div>
                        <div className='platform-security-tab-item flex flex-col lg:flex-row flex-1 p-10 py-16 mb-16 !ml-0 mr-3 lg:ml-10'>
                            <div className='w-72'></div>
                            <div className='text-left'>
                                <span className='block mb-4 text-lg !font-normal'>DNS Security</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tortor sem risus in lacus, mi ipsum risus id. Sit proin mauris
                                    aliquam ullamcorper maecenas dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='background66 w-full flex flex-col mt-12 py-12 text-left px-3'>
                    <div className='container mx-auto px-2'>
                        <Title01 className="block text-left mb-12 !font-medium text-2xl">Internal Control</Title01>

                        <span class="block text-lg mb-4 !font-normal">Internal Protection</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tempus sed dictum at. Parturient risus nullam ut erat nullam lobortisnunc,habitasse lacus. Magnis ut dolor viverra amet, et lacus quis. Nulla id consectetur feugiat mi sit facilisis. </p>

                        <span class="block text-lg mt-8 mb-4 !font-normal">Access Restriction</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tempus sed dictum at. Parturient risus nullam ut erat nullam lobortisnunc,habitasse lacus. Magnis ut dolor viverra amet, et lacus quis. Nulla id consectetur feugiat mi sit facilisis. </p>

                        <Title01 className="block text-left mt-16 mb-12 !font-medium text-xl">Development Management</Title01>
                        <span class="block text-lg mt-8 mb-4 !font-normal">Online Management</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tempus sed dictum at. Parturient risus nullam ut erat nullam lobortisnunc,habitasse lacus. Magnis ut dolor viverra amet, et lacus quis. Nulla id consectetur feugiat mi sit facilisis. </p>

                        <span class="block text-lg mt-8 mb-4 !font-normal">Development Management</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tempus sed dictum at. Parturient risus nullam ut erat nullam lobortisnunc,habitasse lacus. Magnis ut dolor viverra amet, et lacus quis. Nulla id consectetur feugiat mi sit facilisis. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlatformSecurityTab;