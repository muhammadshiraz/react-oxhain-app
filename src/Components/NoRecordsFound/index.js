import React from 'react';
import NoRecordsFoundIco from "../../Assets/Icons/NoRecordsFound/no-records-found.png";
import {
    NoRecordsFound,
} from './NoRecordsFound.styled';

const index = () => {
    return (
        <NoRecordsFound className='flex flex-col items-center justify-center w-full h-full'>
            <img src={NoRecordsFoundIco} alt="No Records Found" />
            <p className='font-prompt font-normal text-sm mt-2.5'>No records found</p>
        </NoRecordsFound>
    );
};

export default index;