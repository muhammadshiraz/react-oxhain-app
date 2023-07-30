import React from "react";
import DataTable from "../../../Components/BasicTrade/DataTable";

const TradeHistory = () => {
    const tableHeaderItems = [
		{ label: "Date", sort: false },
		{ label: "Pair", sort: false },
		{ label: "Side", sort: true },
		{ label: "Price", sort: false },
		{ label: "Fee", sort: false },
		{ label: "Role", sort: false },
		{ label: "Total", sort: false },
	];

    return (
		<>
			<DataTable headerItems={tableHeaderItems} />
		</>
	);
};

export default TradeHistory;
