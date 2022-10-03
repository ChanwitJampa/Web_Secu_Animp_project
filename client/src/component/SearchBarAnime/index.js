import "./index.scss";
import { useState,useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createFilterOptions } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import {fetchAnimeAsync} from '../../actions/animeListAction'
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

const SearchBarAnime = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const DataAnime =useSelector(state=>state.animeList)
  const [value, setValue] = useState();
  const [inputValue, setInputValue] = useState('');

  
  useEffect(()=>{
    dispatch(fetchAnimeAsync())
  })


  const defaultFilterOptions = createFilterOptions();
  const filterOptions = (options, state) => {
    return defaultFilterOptions(options, state).slice(0, 10);
  };

  return (
    <div className="searchBar">
      <Autocomplete
        disablePortal
        filterOptions={filterOptions}
        id="free-solo-demo"
        freeSolo
        options={DataAnime}
        sx={{
          width: 240,
        }}
        getOptionLabel={(option) => option.animes_name}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 1, flexShrink: 0 } }} {...props} onClick={()=>navigate(`/anime/${option.animes_id}`)}>
            <img
              loading="lazy"
              width="50"
              alt=""
              src={`${option.animes_image}`}
            />
            {option.animes_name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            hiddenLabel
            placeholder="Search"
            className="searchBar-input"
          />
        )}
      />
      <IconButton aria-label="toggle password visibility" className="searchBar-button">
        <SearchIcon />
      </IconButton>
    </div>
  );
};
export default SearchBarAnime;
