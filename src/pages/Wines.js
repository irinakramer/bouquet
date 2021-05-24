import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import WinesAPI from '../services/WinesAPI';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import WineRow from '../components/WineRow';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';

const useStyles = makeStyles( (theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3, 0, 1),
        '@media (min-width:600px)': {
            padding: theme.spacing(8, 0, 6),
          },
    }
}))

const Wines = () => {
    const classes = useStyles();

    const [fetching, setFetching] = useState(false);
    const [wines, setWines] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect( () => {
        const fetchData = async () => {
            setFetching(true);
            const {data} = await WinesAPI.index();
            console.log("fetched data: ", data);
            data ? setWines(data) : console.log("ERROR");
            setFetching(false);
        }
        fetchData();

    }, []);

    const debounce = (fn, time) => {
        let setTimeoutId;
    
        return function() {
            if(setTimeoutId) {
                clearTimeout(setTimeoutId);
            }
            setTimeoutId = setTimeout( () => {
                fn.apply(this, arguments);
                setTimeoutId = null;
            }, time)
        }
    }

    // debounced function
    const handleChange = debounce(function (e) {
        setSearchTerm(e.target.value);
    }, 500);


    const searchResults = !searchTerm
                ? wines
                : wines.filter( w => 
                    w.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <>
        {/* Hero unit */}
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Discover the Bouquet
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    When you take a sip of wine, focus on looking, smelling, tasting and feeling.
                    This guide helps you find the aromas and scents present in common wine families.
                    Learn to taste better!
                </Typography>
            </Container>
        </div>
        {/* End hero unit */}

        {/* Search form */}
        <Container maxWidth="sm" spacing={2}>
            <form noValidate autoComplete="off">
                <TextField 
                    id="outlined-search" 
                    label="Search wines" 
                    type="text" 
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon color="inherit" />
                        </InputAdornment>
                        ),
                    }}                         
                />
                </form>
            </Container>
        {/* End Search form */}

        
        <Container maxWidth="sm" align="center">
            {/* All wines */}
            {
                !fetching ? null : 
                <p>Loading ... </p>
            }
            {
                fetching ? null :
                <List>
                    {searchResults.map( w => <WineRow key={w.objectId} {...w} />)}
                </List>
            } 
            {/* End All wines */} 

            <Typography  variant="body1" align="center" color="textPrimary" paragraph>
                Not finding what you're looking for? {' '}
            </Typography>
            
            <Button 
                component={Link} 
                to={"/wines/new"} 
                variant="outlined" 
                color="primary">
                New Wine
            </Button> 

        </Container>

               
        </>
    )
}

export default Wines;