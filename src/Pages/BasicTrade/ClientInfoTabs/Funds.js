import React from "react";
import DataTable from "../../../Components/BasicTrade/DataTable";

const Funds = () => {
    const tableHeaderItems = [
		{ label: "Coin", sort: true },
		{ label: "Total balance", sort: true },
		{ label: "Available Balance", sort: true },
		{ label: "In order", sort: true },
		{ label: "BTC value", sort: true },
	];

    return (
		<>
			<DataTable headerItems={tableHeaderItems} />
		</>
	);
};

export default Funds;
