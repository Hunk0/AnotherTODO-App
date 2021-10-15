import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({onChange}) {
    return (
        <Box>
            <TextField 
                placeholder="Search..." 
                onChange={onChange}
                fullWidth
                InputProps={{
                    startAdornment: <SearchIcon />
                }}
            />
        </Box>
    )
}

export default SearchBar
