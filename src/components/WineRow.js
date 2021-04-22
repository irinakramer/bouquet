import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
    white: {
        backgroundColor: theme.palette.secondary.light,
    },
    red: {
        backgroundColor: theme.palette.primary.light,
    },
    listItem: {
        margin: theme.spacing(2, 0),
        borderRadius: theme.spacing(1),

    }
}))

const WineRow = ({objectId, name, variety}) => {
    const classes = useStyles();   
    return (
        <ListItem button 
            component={Link}
            className={`${classes.listItem} ${variety === "white" ? classes.white : classes.red}`} 
            to={`/wines/${objectId}`}>
                {name}
        </ListItem>
    )
}

export default WineRow;