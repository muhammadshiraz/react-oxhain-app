import React from 'react';
import Title01 from '../../../../Components/Title/Title01';

const AssetSafetyTab = () => {
    return (
        <>
            <Title01 className="block text-center mb-4">Asset Safety</Title01>

            <div className='container mx-auto px-2 pt-6 pb-20'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex-1 flex flex-col pl-10 pr-10 md:pr-16'>
                        <h2 className='text-left text-lg block'>Hot Wallet</h2>
                        <p className='text-left mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non varius
                            arcu tellus cursus. Blandit cursus et felis, id cursus. In semper amet,
                            elementum in phasellus. Sem mattis eu tristique elementum at magna
                            mi rhoncus quisque.</p>

                        <h2 className='text-left text-lg block mt-12'>Cold Wallet</h2>
                        <p className='text-left mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non varius
                            arcu tellus cursus. Blandit cursus et felis, id cursus. In semper amet,
                            elementum in phasellus. Sem mattis eu tristique elementum at magna
                            mi rhoncus quisque.</p>
                    </div>

                    <div className='lg:flex-1 bg-gray-300 w-11/12 lg:w-auto mx-auto h-48 md:h-72 lg:h-96 mt-8'></div>
                </div>

                <div className='flex flex-col lg:flex-row mt-10'>
                    {/* Show image, if you can use large screen <-> PC */}
                    <div className='flex-1 bg-gray-300 h-96 hidden lg:block'></div>

                    <div className='flex-1 flex flex-col px-10'>
                        <h2 className='text-left text-lg block'>Multi Signature</h2>
                        <p className='text-left mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non varius
                            arcu tellus cursus. Blandit cursus et felis, id cursus. In semper amet,
                            elementum in phasellus. Sem mattis eu tristique elementum at magna
                            mi rhoncus quisque.</p>

                        <h2 className='text-left text-lg block mt-12'>Withdrawal Protection</h2>
                        <p className='text-left mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non varius
                            arcu tellus cursus. Blandit cursus et felis, id cursus. In semper amet,
                            elementum in phasellus. Sem mattis eu tristique elementum at magna
                            mi rhoncus quisque.</p>
                        <p className='text-left mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non varius
                            arcu tellus cursus. Blandit cursus et felis, id cursus. In semper amet,
                            elementum in phasellus. Sem mattis eu tristique elementum at magna
                            mi rhoncus quisque.</p>
                    </div>

                    {/* Show image, if you can use mobile */}
                    <div className='bg-gray-300 w-11/12 h-48 md:h-72 mt-8 mx-auto lg:hidden'></div>
                </div>
            </div>
        </>
    )
}

export default AssetSafetyTab;