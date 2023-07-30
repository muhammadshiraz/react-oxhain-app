import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { OxhainSelect04 } from "./Select04.styled";

export default function Select04({ className, items, onChange, defaultValue }) {
	const [filter, setFilter] = React.useState(defaultValue ? defaultValue : 0.01);
	// const [filter, setFilter] = React.useState(0.01);

	const handleChange = (event) => {
		setFilter(event.target.value);

		if (onChange) {
			onChange(event.target.value);
		}
	};

	return (
		<OxhainSelect04 className={`flex flex-col h-10 ${className}`}>
			<FormControl sx={{ minWidth: 40 }} size="small">
				<Select
					value={filter}
					onChange={handleChange}
					displayEmpty
					inputProps={{ "aria-label": "Without label" }}
				>
					{items.map((item, i) => (
						<MenuItem value={item.value} key={i}>{item.label}</MenuItem>
					))}
				</Select>
			</FormControl>
		</OxhainSelect04>
	);
}
