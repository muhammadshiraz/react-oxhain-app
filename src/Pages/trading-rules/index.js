import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import OxhainBanner from "../../Components/Banner/Banner01";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getBUSDMarkets } from './data';
import usePagination from '../../Components/Pagination';
import Pagination01 from '../../Components/Pagination/Pagination01';
import {
    OxhainTradingRules
} from "./TR.styled";

const TradingRules = () => {
    const [value, setValue] = React.useState('1');
    let [page, setPage] = React.useState(1);
    const PER_PAGE = 5;

    const count = Math.ceil(getBUSDMarkets.length / PER_PAGE);
    const _DATA = usePagination(getBUSDMarkets, PER_PAGE);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handlePagination = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    React.useEffect(() => {
        setPage(1);
    }, [value]);

    return (
        <OxhainTradingRules className="flex flex-col items-start justify-start w-full anti-money-control-section font-prompt my-20">
            <OxhainBanner  
                className="h-[200px]"
                titleclassname="mobile:mt-8 tablet:mt-8 desktop:mt-5"
                breadcrumblink01="/trading-rules"
                breadcrumb01="Legal"
                breadcrumblink02="/trading-rules"
                breadcrumb02="Trading Rules"
                title="Trading Rules"
            />
            <Box sx={{ width: '100%'}}>
                <TabContext value={value}
                    scrollButtons
                    allowScrollButtonsMobile
                >
                    <Box style={{backgroundColor: `rgba(73, 73, 238, 0.3)`}}>
                        <TabList className="container mx-auto mobile:px-5 tablet:px-5 ipad:px-2 laptop:px-2 desktop:px-2" 
                            onChange={handleChange}
                            variant="scrollable"
                        >
                            <Tab label="BUSD Markets" value="1" />
                            <Tab label="USDT Markets" value="2" />
                            <Tab label="BNB Markets" value="3" />
                            <Tab label="BTC Markets" value="4" />
                            <Tab label="ALTS Markets" value="5" />
                            <Tab label="FIAT Markets" value="6" />
                        </TabList>
                    </Box>
                    <div className="flex flex-col container mx-auto mobile:px-5 tablet:px-5 ipad:px-2 laptop:px-2 desktop:px-2">
                        <TabPanel value="1">
                            <TableContainer>
                                <Table sx={{ minWidth: 1400 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="w-[5%]">Pair</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Trade Amount</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Amount Movement</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Price Movement</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Order Size</TableCell>
                                            <TableCell align="left" className="w-[10%]">Maximum Market Oder Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {_DATA.currentData().map(v => {
                                        return (
                                            <TableRow
                                                key={v.id}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {v.pair}
                                                </TableCell>
                                                <TableCell align="left">{v.mintradeamount}</TableCell>
                                                <TableCell align="left">{v.minamountmovement}</TableCell>
                                                <TableCell align="left">{v.minpricemovement}</TableCell>
                                                <TableCell align="left">{v.minordersize}</TableCell>
                                                <TableCell align="left">{v.maxmarketorderamount}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div className='flex mobile:justify-center tablet:justify-end ipad:justify-end laptop:justify-end desktop:justify-end items-center w-full mt-5'><Pagination01 count={count} page={page} handleChange={handlePagination}/></div>
                        </TabPanel>
                        <TabPanel value="2">
                            <TableContainer>
                                <Table sx={{ minWidth: 1400 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="w-[5%]">Pair</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Trade Amount</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Amount Movement</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Price Movement</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Order Size</TableCell>
                                            <TableCell align="left" className="w-[10%]">Maximum Market Oder Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {_DATA.currentData().map(v => {
                                        return (
                                            <TableRow
                                                key={v.id}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {v.pair}
                                                </TableCell>
                                                <TableCell align="left">{v.mintradeamount}</TableCell>
                                                <TableCell align="left">{v.minamountmovement}</TableCell>
                                                <TableCell align="left">{v.minpricemovement}</TableCell>
                                                <TableCell align="left">{v.minordersize}</TableCell>
                                                <TableCell align="left">{v.maxmarketorderamount}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div className='flex mobile:justify-center tablet:justify-end ipad:justify-end laptop:justify-end desktop:justify-end items-center w-full mt-5'><Pagination01 count={count} page={page} handleChange={handlePagination}/></div>
                        </TabPanel>
                        <TabPanel value="3">
                            <TableContainer>
                                <Table sx={{ minWidth: 1400 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="w-[5%]">Pair</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Trade Amount</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Amount Movement</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Price Movement</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Order Size</TableCell>
                                            <TableCell align="left" className="w-[10%]">Maximum Market Oder Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {_DATA.currentData().map(v => {
                                        return (
                                            <TableRow
                                                key={v.id}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {v.pair}
                                                </TableCell>
                                                <TableCell align="left">{v.mintradeamount}</TableCell>
                                                <TableCell align="left">{v.minamountmovement}</TableCell>
                                                <TableCell align="left">{v.minpricemovement}</TableCell>
                                                <TableCell align="left">{v.minordersize}</TableCell>
                                                <TableCell align="left">{v.maxmarketorderamount}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div className='flex mobile:justify-center tablet:justify-end ipad:justify-end laptop:justify-end desktop:justify-end items-center w-full mt-5'><Pagination01 count={count} page={page} handleChange={handlePagination}/></div>
                        </TabPanel>
                        <TabPanel value="4">
                            <TableContainer>
                                <Table sx={{ minWidth: 1400 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="w-[5%]">Pair</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Trade Amount</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Amount Movement</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Price Movement</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Order Size</TableCell>
                                            <TableCell align="left" className="w-[10%]">Maximum Market Oder Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {_DATA.currentData().map(v => {
                                        return (
                                            <TableRow
                                                key={v.id}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {v.pair}
                                                </TableCell>
                                                <TableCell align="left">{v.mintradeamount}</TableCell>
                                                <TableCell align="left">{v.minamountmovement}</TableCell>
                                                <TableCell align="left">{v.minpricemovement}</TableCell>
                                                <TableCell align="left">{v.minordersize}</TableCell>
                                                <TableCell align="left">{v.maxmarketorderamount}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div className='flex mobile:justify-center tablet:justify-end ipad:justify-end laptop:justify-end desktop:justify-end items-center w-full mt-5'><Pagination01 count={count} page={page} handleChange={handlePagination}/></div>
                        </TabPanel>
                        <TabPanel value="5">
                            <TableContainer>
                                <Table sx={{ minWidth: 1400 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="w-[5%]">Pair</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Trade Amount</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Amount Movement</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Price Movement</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Order Size</TableCell>
                                            <TableCell align="left" className="w-[10%]">Maximum Market Oder Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {_DATA.currentData().map(v => {
                                        return (
                                            <TableRow
                                                key={v.id}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {v.pair}
                                                </TableCell>
                                                <TableCell align="left">{v.mintradeamount}</TableCell>
                                                <TableCell align="left">{v.minamountmovement}</TableCell>
                                                <TableCell align="left">{v.minpricemovement}</TableCell>
                                                <TableCell align="left">{v.minordersize}</TableCell>
                                                <TableCell align="left">{v.maxmarketorderamount}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div className='flex mobile:justify-center tablet:justify-end ipad:justify-end laptop:justify-end desktop:justify-end items-center w-full mt-5'><Pagination01 count={count} page={page} handleChange={handlePagination}/></div>
                        </TabPanel>
                        <TabPanel value="6">
                            <TableContainer>
                                <Table sx={{ minWidth: 1400 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="w-[5%]">Pair</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Trade Amount</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Amount Movement</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Price Movement</TableCell>
                                            <TableCell align="left" className="w-[10%]">Minimum Order Size</TableCell>
                                            <TableCell align="left" className="w-[10%]">Maximum Market Oder Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {_DATA.currentData().map(v => {
                                        return (
                                            <TableRow
                                                key={v.id}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {v.pair}
                                                </TableCell>
                                                <TableCell align="left">{v.mintradeamount}</TableCell>
                                                <TableCell align="left">{v.minamountmovement}</TableCell>
                                                <TableCell align="left">{v.minpricemovement}</TableCell>
                                                <TableCell align="left">{v.minordersize}</TableCell>
                                                <TableCell align="left">{v.maxmarketorderamount}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div className='flex mobile:justify-center tablet:justify-end ipad:justify-end laptop:justify-end desktop:justify-end items-center w-full mt-5'><Pagination01 count={count} page={page} handleChange={handlePagination}/></div>
                        </TabPanel>
                    </div>
                </TabContext>
            </Box>
        </OxhainTradingRules>
    );
};

export default TradingRules;