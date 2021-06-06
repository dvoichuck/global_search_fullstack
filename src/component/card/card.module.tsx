import React from 'react';
import useStyles from "./style";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";

const CardModule = (props: any) => {
    console.log(props)
    let classes = useStyles()
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.card.avatar_url}
                        title={props.card.login}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.card.login}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.card.bio}
                            {props.card.message}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <a href={props.card.html_url}>Открыть</a>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default CardModule;