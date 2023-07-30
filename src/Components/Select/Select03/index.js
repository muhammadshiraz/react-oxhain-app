import React from "react";
// import {ReactComponent as UpArrow} from "../../../Assets/Icons/Select/Select03/Down-Arrow.svg";
// import {ReactComponent as DownArrow} from "../../../Assets/Icons/Select/Select03/Down-Arrow.svg";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { OxhainSelect03 } from "./Select03.styled";

export default function Select03() {
  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <OxhainSelect03 className="flex flex-col h-10">
      <FormControl sx={{ minWidth: 180 }} size="small">
        <InputLabel id="oxhain-select-03">Pair</InputLabel>
        <Select
          labelId="oxhain-select-03"
          id="oxhain-select-03"
          value={filter}
          label="Filter"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>Pair</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </OxhainSelect03>
  );
}