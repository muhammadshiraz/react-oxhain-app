import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as PriceArrow } from '../../Assets/Icons/Trade/price-arrow.svg';
import { OxhainTradeOrderBookTicker } from './TradeOrderBookTicker.styled';

const TradeOrderBookTicker = () => {
    const priceObj = useSelector(state => state.trade.priceObj);

    return (
        <OxhainTradeOrderBookTicker className="flex flex-row items-center justify-between pl-4 pr-5 my-2 h-11">
            <span className={`w-16 text-sm text-left font-semibold ${priceObj.direction === 'up' ? 'text52' : 'text51'}`}>
                {priceObj.price}
            </span>
            {/* Price arrow default color is red and down */}
            <PriceArrow className={`ml-2 ${priceObj.direction === 'up' ? 'up' : ''}`} />
            <span className="flex-1 text50 text-xxs font-medium">
                {priceObj.price}
            </span>
            <span className="flex-1 text53 text-xs text-right">More</span>
        </OxhainTradeOrderBookTicker>
    )
}

export default TradeOrderBookTicker;