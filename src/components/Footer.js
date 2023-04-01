import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(6),
    }
}))

const Footer = () => {
    const classes = useStyles(); 
    return (
        <div className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">       
                Final project for General Assembly React Development course, by {' '}
                <Link color="inherit" href="https://www.irinakramer.com">
                    Irina Kramer
                </Link>
                {', 2021'}
            </Typography>
        </div>
        
    )
}

export default Footer;