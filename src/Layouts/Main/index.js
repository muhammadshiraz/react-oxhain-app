import React from 'react';
import Routing from "../../Routes/index";
import { OxhainMain } from "./Main.styled";

const index = () => {
    return (
        <OxhainMain className='w-full'>
            <Routing />
        </OxhainMain>
    );
};

export default index;