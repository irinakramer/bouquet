import Typography from '@mui/material/Typography';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles( theme => ({
    listItem: {
        padding: theme.spacing(1),
    },
    flavorImg: {
        maxWidth: '75px',
        '@media (min-width:600px)': {
            maxWidth: '100px',
          },
    }
}))

const Flavor = (props) => {

    const classes = useStyles();

    const imageName = props.flavor.split(' ').join('');
    
    return (
        <li className={classes.listItem}>
            <img className={classes.flavorImg} alt={`${imageName} icon`} src={process.env.PUBLIC_URL + `/images/${imageName}.png`} />
            <Typography variant="caption" align="center" color="textPrimary" display="block" >
                {props.flavor}
            </Typography>         
        </li>
    )
}

export default Flavor;