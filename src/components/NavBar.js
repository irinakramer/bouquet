import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography"

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="body2" color="inherit">
                        <Link to="/">Bouquet Wine Tasting</Link>
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NavBar;