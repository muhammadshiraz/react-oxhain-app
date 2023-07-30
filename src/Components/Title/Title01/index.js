import React from "react";

const Title01 = ({ className, children }) => {
	return <span className={`text-3xl !font-medium font-prompt ${className}`}>{children}</span>;
};

export default Title01;
