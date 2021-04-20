import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Footer = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            Final project for General Assembly React Development course, by {' '}
            <Link color="inherit" href="https://www.irinakramer.com">
                Irina Kramer
            </Link>
        </Typography>
    )
}

export default Footer;