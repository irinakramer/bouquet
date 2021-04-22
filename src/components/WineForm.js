import {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
      },
    actionButtons: {
        margin: theme.spacing(1),
    },
}))

const WineForm = ({wine, setWine, callApi, buttonText, redirectTo, cancelPath}) => {

    const classes = useStyles();

    const [errors, setErrors] = useState([]);
    const [redirect, setRedirect] = useState({});

    const handleChange = e => {
        console.log("form changed");

        // check for string fields (name, variety, overview) and assign them sting values,
        // otherwise split into array and assign array values
        setWine(prevWine => ({
            ...prevWine,
            [e.target.name]: e.target.name === 'name' || e.target.name === 'variety' || e.target.name === 'overview' 
                            ? e.target.value : e.target.value.split(',')
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const {data, errors} = await callApi();
        console.log("wineform data", data)

        if (data) {
            setRedirect( {
                pathname: redirectTo(data)
            })
        } else {
            setErrors(errors);
        }
    }

    if(redirect.pathname) {
        return <Redirect to={redirect.pathname} />
    }

    return (

        <form onSubmit={handleSubmit} className={classes.form} >
            {
                !errors.length ? null :
                <>
                    <Typography variant="h5">
                        {errors.length} error(s) prohibited this wine from being created.
                    </Typography>
                    <Typography variant="body1">
                        <ul>
                            {errors.map((e, i) => <li key={i}>{e}</li>)}
                        </ul>
                    </Typography>
                </>   
            }
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="name"
                        label="Wine name"
                        name="name"
                        autoFocus
                        value={wine.name || ''}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField
                        variant="outlined"  
                        required
                        fullWidth
                        id="variety"
                        label="Variety"
                        name="variety"
                        autoFocus
                        value={wine.variety || ''}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        variant="outlined"
                        fullWidth
                        id="aromas"
                        label="Aromas"
                        name="aromas"
                        autoFocus
                        value={wine.aromas || ''}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        variant="outlined"                     
                        fullWidth
                        id="fruits"
                        label="Fruits"
                        name="fruits"
                        autoFocus
                        value={wine.fruits || ''}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        variant="outlined"                       
                        fullWidth
                        id="flowers"
                        label="Flowers"
                        name="flowers"
                        autoFocus
                        value={wine.flowers || ''}
                        onChange={handleChange}
                    />
                </Grid>
               <Grid item xs={12} >
                    <TextField
                        variant="outlined"                      
                        fullWidth
                        id="withBottleAge"
                        label="with Bottle Age"
                        name="withBottleAge"
                        autoFocus
                        value={wine.withBottleAge || ''}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        variant="outlined"                      
                        fullWidth
                        id="barrelAged"
                        label="Barrel Aged"
                        name="barrelAged"
                        autoFocus
                        value={wine.barrelAged || ''}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        variant="outlined"                       
                        fullWidth
                        id="bonus"
                        label="Bonus"
                        name="bonus"
                        autoFocus
                        value={wine.bonus || ''}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        variant="outlined"                      
                        fullWidth
                        multiline
                        rows={4}
                        id="overview"
                        label="Overview"
                        name="overview"
                        autoFocus
                        value={wine.overview || ''}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        variant="outlined"                    
                        fullWidth
                        id="regions"
                        label="Where does it come from?"
                        name="regions"
                        autoFocus
                        value={wine.regions || ''}
                        onChange={handleChange}
                    />
                 </Grid>
                 <Grid item xs={12} align="center">
                    <Button 
                        type="submit"
                        variant="contained" 
                        color="primary"
                        className={classes.actionButtons}>
                        {buttonText}
                    </Button>  
                    <Button 
                        component={Link} 
                        to={cancelPath} 
                        variant="outlined" 
                        color="primary"
                        className={classes.actionButtons}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default WineForm;