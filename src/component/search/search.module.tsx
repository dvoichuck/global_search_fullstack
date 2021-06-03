import React, {useState} from 'react';
import {TextField} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import useStyles from "./style";

const SearchModule = () => {
    const [state, setState] = useState<string>('')
    const classes = useStyles()
    return (
        <Box className={classes.searchInput}>
            <div>{state}</div>
            <TextField onChange={event => setState(event.target.value)} value={state} id="standard-basic" label="Pls, input nickname"/>
        </Box>
    );
};

export default SearchModule;