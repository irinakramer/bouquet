import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
    white: {
        backgroundColor: "beige"
    },
    red: {
        backgroundColor: "lightpink"
    }
})

const WineRow = ({objectId, name, variety}) => {
    const classes = useStyles();   
    return (
        <div>
            <List>
                <ListItem button 
                    component={Link}
                    className={`${variety === "white" ? classes.white : classes.red}`} 
                    to={`/wines/${objectId}`}>
                        {name} - {variety}
                </ListItem>
            </List>
            
        </div>
    )
}

export default WineRow;