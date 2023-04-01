import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import {makeStyles} from '@mui/styles';

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