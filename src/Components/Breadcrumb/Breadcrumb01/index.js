import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../../../Assets/Icons/Banner/Banner01/right-arrow.svg";
import { OxhainBreadcumb01 } from "./Breadcrumb01.styled";

const Breadcrumb01 = ({ label1, label2, label3, link1, link2, link3 }) => {
	return (
		<OxhainBreadcumb01 className="mb-16">
			<div className="flex flex-row items-center">
				{label1 ? (
					<>
						<Link to={`${link1}`} className="text5 text-lg font-normal mr-3.5">
							{label1}
						</Link>
					</>
				) : (
					""
				)}
				{label2 ? (
					<>
						<RightArrow className="svg-fill-05" />
						<Link to={`${link2}`} className="text5 text-lg font-normal mx-3.5">
							{label2}
						</Link>
					</>
				) : (
					""
				)}
				{label3 ? (
					<>
						<RightArrow className="svg-fill-05" />
						<Link to={`${link3}`} className="text5 text-lg font-normal mx-3.5">
							{label3}
						</Link>
					</>
				) : (
					""
				)}
			</div>
		</OxhainBreadcumb01>
	);
};

export default Breadcrumb01;
