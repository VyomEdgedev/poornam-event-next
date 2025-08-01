
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import CheckIcon from '@mui/icons-material/Check';

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP,
      width: 200,
      overflowY: 'auto',
    },
  },
};

function getStyles(name, selectedNames, theme) {
  return {
    fontWeight: selectedNames.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function CustomMultiSelect({
  names = [],
  placeholder = "Select names...",
  value = [],
  onChange,
  ...props
}) {
  const theme = useTheme();
    const getObjById = (id) => names.find(n => n._id === id);
      const handleChange = (event) => {
    const selectedIds = event.target.value;
    const selectedObjs = selectedIds.map(id => getObjById(id)).filter(Boolean);
    onChange(selectedObjs);
  };
  return (
    <FormControl
      variant="outlined"
      sx={{
        color: "#000D1F",
        background: "#FFFFFF",
        width: { xs: "178px", sm: "250px" },
        height: "46px",
        borderRadius: "30px",
        textTransform: "none",
        fontFamily: "Akatab,Sans-serif",
        fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
        fontWeight: 400,
        '& .MuiOutlinedInput-root': {
          borderRadius: "30px",
          height: "46px",
          minHeight: "46px",
          fontFamily: "Akatab,Sans-serif",
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
          color: "#000D1F",
          background: "#FFFFFF",
          '& fieldset': {
            borderColor: "#DAA412 ",
            borderWidth: 2,
          },
          '&:hover fieldset': {
            borderColor: "#DAA412",
          },
          '&.Mui-focused fieldset': {
            borderColor: "#DAA412 ",
          },
        },
      }}
    >
      <Select
        multiple
        value={value.map(obj=>obj._id)}
        onChange={handleChange}
        input={<OutlinedInput />}
         renderValue={(selected) =>
          selected.length === 0 ? (
            <Box
              sx={{
                color: "#bdbdbd",
                fontFamily: "Akatab,Sans-serif",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                pl: 1,
              }}
            >
              {placeholder}
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                gap: 0.5,
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                height: 32,
                alignItems: 'center',
                '&::-webkit-scrollbar': {
                  height: 4,
                  background: 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'none',
                  borderRadius: 2,
                },
                scrollbarWidth: 'thin',
                scrollbarColor: 'transparent',
              }}
            >
              {value.map((obj) => (
                <Chip
                  key={obj._id}
                  label={obj.name}
                  sx={{
                    borderRadius: "30px",
                    height: 28,
                    fontFamily: "Akatab,Sans-serif",
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                    background: "#DAA412",
                    color: "#fff",
                    border: "1.5px solid #DAA412",
                  }}
                />
              ))}
            </Box>
          )
        }
        MenuProps={{
          ...MenuProps,
          PaperProps: {
            ...MenuProps.PaperProps,
            sx: {
              '& .MuiMenuItem-root': {
                fontFamily: "Akatab,Sans-serif",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                minHeight: 32,
                height: 32,
              },
              '&::-webkit-scrollbar': {
                width: 3,
                background: '#DAA412',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'gray',
                borderRadius: 2,
              },
              scrollbarWidth: 'gray',
              scrollbarColor: '#DAA412 #fff',
            }
          }
        }}
        sx={{
          borderRadius: "30px",
          height: "46px",
          minHeight: "46px",
          fontFamily: "Akatab,Sans-serif",
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
          color: "#000D1F",
          background: "#FFFFFF",
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "#DAA412 ",
            borderWidth: 2,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: "#DAA412 ",
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: "#DAA412 ",
          },
        }}
        {...props}
      >
        {names.map((name) => (
          <MenuItem
            key={name?._id}
            value={name?._id}
            style={getStyles(name._id, value.map(obj=>obj._id), theme)}
          >
            <Box sx={{ flex: 1 }}>{name.name}</Box>
            {value.some(obj =>obj._id === name._id) && (
              <CheckIcon color="success" fontSize="small" />
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
