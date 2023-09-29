import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';
import {useEffect} from 'react';

export default function Select<T extends {type: string; name: string}>({
  name,
  label,
  list,
  defaultIndexValue,
  onSelect,
}: {
  name: string;
  label: string;
  list: T[];
  onSelect: (selected: T) => unknown;
  defaultIndexValue?: number;
}) {
  const [selected, setSelected] = React.useState(defaultIndexValue || 0);

  const handleChange = (event: SelectChangeEvent) => {
    const newSelected = list.findIndex(i => i.type === event.target.value);
    setSelected(newSelected);

    onSelect(list[newSelected]);
  };

  useEffect(() => {
    if (defaultIndexValue) {
      setSelected(defaultIndexValue);
    }
  }, [setSelected, defaultIndexValue]);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <MuiSelect
        labelId={`${name}-label`}
        id={name}
        value={list[selected]?.type || list[0].type}
        label={label}
        onChange={handleChange}
      >
        {list.map(item =>
          <MenuItem key={item.type} value={item.type}>{item.name}</MenuItem>)}
      </MuiSelect>
    </FormControl>
  );
}
