import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface CategoryProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  error?: string;
}

export default function CategoryInput({
  label,
  value,
  onChange,
  error,
}: CategoryProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth error={!!error}>
        <InputLabel id="category-label">{label}</InputLabel>

        <Select
          labelId="category-label"
          id="category"
          value={value}
          label={label}
          onChange={onChange}
        >
          <MenuItem value="Foods">Foods</MenuItem>
          <MenuItem value="Shopping">Shopping</MenuItem>
          <MenuItem value="Entertainment">Entertainment</MenuItem>
          <MenuItem value="Subscription">Subscription</MenuItem>
        </Select>

        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </FormControl>
    </Box>
  );
}