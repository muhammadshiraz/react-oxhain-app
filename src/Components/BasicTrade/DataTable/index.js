import React from "react";
import { closeMarginOrder } from "../../../Utils/API";
import Icon from "../../Icon";
import { OxhainDataTable } from "./DataTable.styled";

const DataTable = ({ headerItems = [], contentItems = [], children, classname }) => {
	return (
		<OxhainDataTable className={`flex flex-col min-h-[200px] flex-1 ${classname}`}>
			<div className="header flex flex-row items-center justify-between pb-1 pr-4">
				{headerItems?.map((item, i) => (
					<button
						className="flex flex-row items-center font-medium w-[10%]"
						disabled={!item.sort}
						key={i}
					>
						<span className="text-xs mr-1">{item.label}</span>

						{item.sort ? <Icon name={"downArrow"} /> : ""}
					</button>
				))}
			</div>

			<div className="flex flex-col text-xs h-72 overflow-y-auto pr-4">
				{children}

				{contentItems.length === 0 ? (
					<div className="flex flex-column items-center justify-center flex-1">
						<span className="text-xs text4">You have no open orders.</span>
					</div>
				) : ''}
			</div>
		</OxhainDataTable>
	);
};

export default DataTable;
