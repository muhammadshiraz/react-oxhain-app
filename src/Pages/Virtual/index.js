import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Routing from '../../Routes';

const Virtual = () => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const p = [];

        for (var i = 0; i < 200; i++) {
            try {
                let route = Routing.toString().split('path: "')[i];
                route = route.split('",')[0];

                if (!route.includes(',')) {
                    p.push(route);
                }
            } catch {

            }
        }

        setPages(p);
    }, []);

    const onClickHandle = (page) => {
        return window.open(page, '_blank');
    }

    return (
        <div className='min-h-screen bg-slate-800 pt-20'>
            <div className='flex flex-col w-96 bg-slate-900 py-12 px-4 text-left'>
                {pages.map((page, i) => (
                    <span key={'dynamic-page-name-' + i} className="text-gray-400 hover:text-white text-lg mt-2 cursor-pointer" onClick={() => onClickHandle(page)}>{page}</span>
                ))}
            </div>
        </div>
    )
}

export default Virtual;