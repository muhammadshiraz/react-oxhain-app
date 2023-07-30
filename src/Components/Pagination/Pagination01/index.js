import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination01.styled';
import { OxhainPagination01 } from "./Pagination01.styled";

function Pagination01({count, page, handleChange}) {
    return(
        <OxhainPagination01 className="flex flex-col">
            <Stack className='flex flex-col' spacing={2}>
                <Pagination 
                    count={count}
                    color="primary" 
                    size="large"
                    page={page}
                    onChange={handleChange}
                />
            </Stack>
        </OxhainPagination01>
    );
}

export default Pagination01;
