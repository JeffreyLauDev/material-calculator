import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';


// CALCULATOR BUTTON
export default function ContainedButtons(props) {

    var { size, color, value, disabled } = props;
    var GridSize = size === undefined ? 3 : size * 3;
    return (
        <Grid item xs={GridSize}>
            <IconButton variant="contained" className={"button-" + color} disabled={disabled} onClick={() => props.click(value)} > {value}</IconButton >
        </Grid >
    );
}