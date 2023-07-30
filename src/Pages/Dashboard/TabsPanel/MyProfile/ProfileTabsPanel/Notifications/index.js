import React from 'react';
import {ReactComponent as DownArrow} from '../../../../../../Assets/Icons/Dashboard/TabsPanel/Notifications/Down-Arrow.svg';
import { getNotifications } from './data';
import '../../../../Dashboard.styled';
import usePagination from '../../../../../../Components/Pagination';
import Pagination01 from '../../../../../../Components/Pagination/Pagination01';

const Notifications = () => {
    let [page, setPage] = React.useState(1);
    const PER_PAGE = 8;

    const count = Math.ceil(getNotifications.length / PER_PAGE);
    const _DATA = usePagination(getNotifications, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
    
    return (
        <div id="Notifications" className='flex flex-col w-full justify-start items-center mt-10 mb-20'> 
            <h3 className='text-left font-prompt text-3xl font-semibold w-full pl-16'>Notifications</h3>
            <div className='flex flex-col w-full items-center jusitify-center mt-3 mb-8'>
                {_DATA.currentData().map(v => {
                    return (
                            <div key={v.id} className='flex flex-row w-full justify-between boder-bottom-line-03 px-16 py-7'>
                                <div className='flex flex-col'>
                                    <h4 className='text5 font-prompt font-medium text-base text-left ml-6 mb-1'>{v.title}</h4>
                                    <p className='text4 font-prompt font-light text-sm'>{v.paragraph}</p>
                                </div>
                                <div className='flex flex-row'>
                                    <button type='button' className='flex flex-row noti-date-time'>
                                        <p className='text4 font-prompt font-normal text-xs mr-1'>{v.date}</p>
                                        <p className='text4 font-prompt font-normal text-xs ml-1'>{v.time}</p>
                                        <DownArrow className='mt-1.5 ml-2' />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <div className='flex justify-end items-end pr-16 w-full'><Pagination01 count={count} page={page} handleChange={handleChange}/></div>
        </div>
    );
};

export default Notifications;