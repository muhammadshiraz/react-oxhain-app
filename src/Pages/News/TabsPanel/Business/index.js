import React from "react";
import { Link } from "react-router-dom";
import { getOxhainNews } from '../../data';
import usePagination from '../../../../Components/Pagination';
import Pagination01 from '../../../../Components/Pagination/Pagination01';

const Business = () => {
    let [page, setPage] = React.useState(1);
    const PER_PAGE = 4;

    const count = Math.ceil(getOxhainNews.length / PER_PAGE);
    const _DATA = usePagination(getOxhainNews, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    return (
        <div className="flex flex-col w-full business-control-section">
            {_DATA.currentData().map(v => {
                return (
                    <Link key={v.id} to={v.url} className="flex flex-row w-full font-normal text-base text5 mb-14">
                        <div className="flex flex-col bg-cover w-1/2 h-[275px] bg-no-repeat	mr-3 relative" style={{backgroundImage: `url(${v.src})`}}>
                            <div className="flex w-full h-[112px] bg-contain absolute left-0 bottom-0 bg-no-repeat items-center justify-start" style={{backgroundImage: `url(${v.shape})`}}>
                                <p className="font-normal text-base	text-black mt-16 ml-3.5">{v.author}</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full justify-between ml-3">
                            <div className="flex flex-col">
                                <h3 className="text5 text-2xl font-medium mb-5">{v.title}</h3>
                                <p className="text4 text-xl font-normal">{v.content}</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row rounded-sm background-08 w-[120px] px-3 py-1.5 text-sm justify-between items-center mb-5">
                                    <span className="uppercase text5 font-medium">{v.coin}</span>
                                    <span className="font-semibold text15">{v.per}</span>
                                    {v.arrow}
                                </div>
                                <div className="flex flex-row text-base	font-light">
                                    <span className="text16 mr-5">#{v.tag}</span>
                                    <span className="text16 mr-5">{v.date}</span>
                                    <span className="text16">{v.time}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
            <div className='flex justify-center items-center w-full'><Pagination01 count={count} page={page} handleChange={handleChange}/></div>
        </div>
    );
};

export default Business;