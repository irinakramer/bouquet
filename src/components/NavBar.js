import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

const NavBar = () => {
    return(
            <AppBar position="static">
                <ToolBar>
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