import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
    navbar: {
        borderTop: '20px solid #87103f',
    }
}))
const NavBar = () => {
    const classes = useStyles();
    return(
            <AppBar position="static">
                <ToolBar className={classes.navbar}>
                    <Button 
                        component={Link} 
                        startIcon={<HomeIcon />}
                        to={"/"} 
                        color="inherit">
                            Bouquet Wine Tasting
                    </Button>           
                </ToolBar>
            </AppBar>
    )
}

export default NavBar;