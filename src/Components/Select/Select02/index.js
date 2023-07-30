import React from "react";
// import {ReactComponent as UpArrow} from "../../../Assets/Icons/Select/Select02/Down-Arrow.svg";
// import {ReactComponent as DownArrow} from "../../../Assets/Icons/Select/Select02/Down-Arrow.svg";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { OxhainSelect02 } from "./Select02.styled";

export default function Select02() {
  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <OxhainSelect02 className="flex flex-col h-10">
      <FormControl sx={{ minWidth: 180 }} size="small">
        <InputLabel id="oxhain-select-02">Filter</InputLabel>
        <Select
          labelId="oxhain-select-02"
          id="oxhain-select-02"
          value={filter}
          label="Filter"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>Filter</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </OxhainSelect02>
  );
}