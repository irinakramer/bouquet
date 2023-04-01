import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    white: {
        backgroundColor: theme.palette.secondary.light,
    },
    red: {
        backgroundColor: theme.palette.primary.light,
    },
    button: {
        margin: theme.spacing(1),

    }
}))

const WineRow = ({objectId, name, variety}) => {
    const classes = useStyles();   
    return (
         <Button 
         component={Link} 
         to={`/wines/${objectId}`}
         variant="contained" 
         color={`${variety === "red"  ? "primary" : "secondary" }`}
         className={classes.button}>
         {name}
        </Button> 
    )
}

export default WineRow;