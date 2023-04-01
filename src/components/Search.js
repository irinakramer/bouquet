import {useState} from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import WineRow from '../components/WineRow';
import SearchIcon from '@mui/icons-material/Search';


const Search = ({wines}) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    const searchResults = !searchTerm
                ? wines
                : wines.filter( w => 
                    w.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField 
                    id="outlined-search" 
                    label="Search wines" 
                    type="search" 
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon color="inherit" />
                          </InputAdornment>
                        ),
                      }}
                    
                    />
            </form>
            <ul>
                {searchResults.map( w => <WineRow key={w.objectId} {...w} />)}
            </ul>
        </div>
    )
}

export default Search;