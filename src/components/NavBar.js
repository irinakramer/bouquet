import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

const NavBar = () => {
    return(
        <div>
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
        </div>
    )
}

export default NavBar;