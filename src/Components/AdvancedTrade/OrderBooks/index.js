import React from "react";

const OrderBooks = ({ action, y }) => {
    const orders = [
        {
            priceUSDT: 31681.68,
            amountBTC: 0.0025,
            total: 0.00194341,
        }
    ];

    for (var i = 0; i < 25; i++) {
        orders.push(orders[0]);
    }

    return (
        <div className={`orderbooks flex flex-col text-xs font-prompt flex-auto`} style={{ height: y }}>
            <div className="overflow-y-auto px-1">
                {orders.map((order, i) => (
                    <div className="orderbooks-item flex flex-row justify-between py-1 px-2 font-light" key={'orderbook-' + i}>
                        <span className={`flex-1 text-left ${action === 'sell' ? 'text51' : 'text52'}`}>{order.priceUSDT}</span>
                        <span className="mx-auto">0.1335</span>
                        <span className="flex-1 text-right">{order.total}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderBooks;
