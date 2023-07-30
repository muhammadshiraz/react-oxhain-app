import React from 'react';
import DataTable from '../../../../Components/BasicTrade/DataTable';
import Button02 from '../../../../Components/Button/Button02';
import Title01 from '../../../../Components/Title/Title01';

const ComplianceSecurityTab = () => {
    return (
        <>
            <Title01 className="block text-center mb-4">Compliance Security</Title01>

            <div className='container pt-12 pb-20'>
                <div className='flex flex-row'>
                    <div className='flex-1 flex flex-col md:pr-16'>
                        <h2 className='text-center md:text-left text-xl block'>%100 Collateral Margin</h2>
                        <p className='text-center md:text-left mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra lacus pellentesque enim vulputate egestas in at. Id placerat sodales ac, et morbi
                            sit amet rhoncus. Id eu, sed scelerisque velit dui, sit. Eget massa dui nulla cursus cras pretium.</p>
                    </div>
                </div>

                <h2 className='text-center md:text-left text-xl block mt-12 mb-6'>Released Audit Assessents</h2>
                <div className='compliance-security-tab-table flex flex-col py-16 text-sm lg:text-base mr-3 md:mr-0'>
                    <div className='overflow-hidden px-6'>
                        <div className='px-6 overflow-x-auto'>
                            {/* Header data */}
                            <div className='flex flex-row w-[700px] md:w-auto relative'>
                                <span className='flex-1 !font-medium'>Date</span>
                                <span className='flex-1 !font-medium'>Audit Company</span>
                                <span className='flex-1 !font-medium'>Currency</span>
                                <span className='flex-1 !font-medium'>Report</span>
                                <span className='flex-1 !font-medium'>Website</span>
                                <span className='flex-1 !font-medium'>Status</span>
                            </div>

                            {/* Content data */}
                            <div className='flex flex-row mt-12 w-[700px] md:w-auto'>
                                <p className='flex-1'>May 11th,2022</p>
                                <p className='flex-1'>Armanio LLP</p>
                                <p className='flex-1'>Bitcoin</p>
                                <p className='flex-1'>Oxhain Reserve Proof</p>
                                <p className='flex-1'>Trusted Browser</p>
                                <p className='flex-1'>Issued</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Button02 buttonClass="mt-12 w-8/12 md:w-[500px]" y={40} handleButton={() => window.location.href = "/login"}>
                    <span className="!font-normal !text-white text-sm">Learn more</span>
                </Button02>
            </div>
        </>
    )
}

export default ComplianceSecurityTab;