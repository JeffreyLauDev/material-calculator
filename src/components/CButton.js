import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ContainedButtons(props) {
    const classes = useStyles();
    var { size, color } = props;
    var GridSize = size == undefined ? 3 : size * 3;
    return (
        <Grid item xs={GridSize}>
            <IconButton variant="contained" className={"button-" + color} onClick={() => props.click(props.children)}> {props.children}</IconButton >
        </Grid>
    );
}