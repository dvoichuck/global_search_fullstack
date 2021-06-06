import React, {useState} from 'react';
import {Button, Icon, TextField} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import useStyles from "./style";
import CardModule from "../card/card.module";

const SearchModule:React.FC = () => {
    let url = "https://api.github.com/users/"
    const classes = useStyles()
    const [state, setState] = useState<string>("")
    const [active, setActive] = useState<boolean>(false)
    const [card, setCard] = useState<any>([])


    async function send() {
        setActive(true);
        await fetch(url + state)
            .then(res => res.json()).then(
                (result) => {
                    setCard([result])
                },
                (error) => {
                    console.log(error)
                }
            )
        setActive(false)
    }

    return (
        <div>
            <Box className={classes.searchInput}>
                <TextField
                    onChange={event => setState(event.target.value)}
                    value={state} id="standard-basic"
                    label="Pls, input nickname"
                />
                <Button
                    disabled={active}
                    variant="contained"
                    color="primary"
                    onClick={send}
                >
                    Send
                </Button>
            </Box>
                {card.map((item:any) => (<CardModule key={item.id} card={item}/>))}
        </div>
    );
};

export default SearchModule;