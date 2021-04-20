import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    listItem: {
        padding: theme.spacing(2)
    }
}))

const Flavor = (props) => {

    const classes = useStyles();

    const imageName = props.flavor.split(' ').join('_');
    
    return (
        <li className={classes.listItem}>
            <img src={process.env.PUBLIC_URL + `/images/${imageName}.png`} />
            <Typography variant="caption" align="center" color="textPrimary" display="block" >
                {props.flavor}
            </Typography>         
        </li>
    )
}

export default Flavor;