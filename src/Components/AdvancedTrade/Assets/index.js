import React from 'react';

const Assets = () => {
    return (
        <div className='px-3 mt-1'>
            <span className='assets-title text-base font-semibold block text-left'>Assets</span>

            <div className='flex flex-row mt-4'>
                <button className='flex-1 h-6 background60 mr-[6px] rounded-sm'>
                    <span className='text-[11px] text55'>Deposit</span>
                </button>
                <button className='flex-1 h-6 background60 mr-[6px] rounded-sm'>
                    <span className='text-[11px] text55'>Transfer</span>
                </button>
                <button className='flex-1 h-6 background60 mr-[6px] rounded-sm'>
                    <span className='text-[11px] text55'>Withdraw</span>
                </button>
            </div>
        </div>
    )
}

export default Assets;