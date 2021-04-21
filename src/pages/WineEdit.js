import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import WinesAPI from '../services/WinesAPI';
import WineForm from '../components/WineForm';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
    title: {
        margin: theme.spacing(5, 1),
    },  
}))

const WineEdit = ({match}) => {
    const classes = useStyles();

    const [wine, setWine] = useState({});
    const [redirect, setRedirect] = useState({});

    // fetch Wine data from show api
    useEffect( () => {
        const fetchData = async () => {
            const {data} = await WinesAPI.show(match.params.objectId);
            console.log(data)
            if(data) 
                setWine(data)
            else {
                setRedirect( {pathname: "/404"})
            }
        }
        fetchData();
    }, [match.params.objectId])

    if(redirect.pathname)
        return <Redirect to={redirect.pathname} />

    return (

        <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.title}>
                Edit Wine
            </Typography>
            <WineForm
                wine={wine}
                setWine={setWine}
                callApi={() => WinesAPI.update(wine)}
                buttonText="Update Wine"
                redirectTo={() => `/wines/${wine.objectId}`}
                cancelPath={`/wines/${wine.objectId}`}
            />
        </Container>
    )
}

export default WineEdit;