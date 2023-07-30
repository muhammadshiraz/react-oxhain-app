import React from 'react';
import Select02 from "../../../../../../Components/Select/Select02";
import Select03 from "../../../../../../Components/Select/Select03";
import NoRecordsFound from "../../../../../../Components/NoRecordsFound";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
    DashBoxParagraph
} from '../../../../Dashboard.styled';


function createData(date, pair, type, side, price, amount, filled, total, triggerconditions, action) {
    return { date, pair, type, side, price, amount, filled, total, triggerconditions, action };
}

const rows = [
    createData('31/08/2022', 'USDT/BTC', 'Buy', 24.444, 0.01897, 10, 10, 709.987564, '>=0.00017000', 'Filled'),
    createData('31/08/2022', 'USDT/BTC', 'Buy', 24.444, 0.01897, 10, 10, 709.987564, '>=0.00017000', 'Filled'),
    createData('31/08/2022', 'USDT/BTC', 'Buy', 24.444, 0.01897, 10, 10, 709.987564, '>=0.00017000', 'Filled'),
    createData('31/08/2022', 'USDT/BTC', 'Buy', 24.444, 0.01897, 10, 10, 709.987564, '>=0.00017000', 'Filled'),
    createData('31/08/2022', 'USDT/BTC', 'Buy', 24.444, 0.01897, 10, 10, 709.987564, '>=0.00017000', 'Filled'),
];

const SpotOrder = () => {
    const [isDataFetched, setDataFetched] = React.useState(true);
    
    return (
        <div className='flex flex-col items-start justify-center w-full'>
            <DashBoxParagraph className='font-prompt font-medium text-2xl text-left'>Open Orders</DashBoxParagraph>
            <div className='flex flex-row justify-between items-center w-full mt-5'>
                <div className='flex flex-row items-center w-full'>
                    <div className='mr-[5px]'><Select02 /></div>
                    <div className='ml-[5px]'><Select03 /></div>
                </div>
                <button type='button' className='font-prompt font-normal text-sm cancelallOrder rounded-sm h-10 w-[180px] btn-background-01'>Cancel all orders</button>
            </div>
            
            <div className='flex flex-col items-center justify-center w-full mt-2'>
                <TableContainer>
                    <Table aria-label="simple table" className='w-full'>
                        <TableHead className='w-full'>
                            <TableRow className='boder-bottom-line-03 relative'>
                                <TableCell>Date</TableCell>
                                <TableCell align="center">Pair</TableCell>
                                <TableCell align="center">Type</TableCell>
                                <TableCell align="center">Side</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Amount</TableCell>
                                <TableCell align="center">Filled</TableCell>
                                <TableCell align="center">Total</TableCell>
                                <TableCell align="center">Trigger Conditions</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        {!isDataFetched ?
                            <TableBody className='relative h-60 w-full'>
                                <div className='absolute bottom-0 left-0 w-full h-52'>
                                    <NoRecordsFound />
                                </div>
                            </TableBody>
                            :
                            <TableBody className='relative'>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.date}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{row.date}</TableCell>
                                        <TableCell align="center">{row.pair}</TableCell>
                                        <TableCell align="center">{row.type}</TableCell>
                                        <TableCell align="center">{row.side}</TableCell>
                                        <TableCell align="center">{row.price}</TableCell>
                                        <TableCell align="center">{row.amount}</TableCell>
                                        <TableCell align="center">{row.filled}</TableCell>
                                        <TableCell align="center">{row.total}</TableCell>
                                        <TableCell align="center">{row.triggerconditions}</TableCell>
                                        <TableCell align="right">{row.action}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        }
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default SpotOrder;