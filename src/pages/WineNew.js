import {useState} from 'react';
import WinesAPI from '../services/WinesAPI';
import WineForm from '../components/WineForm';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles( (theme) => ({
    title: {
        margin: theme.spacing(5, 1),
    },  
}))

const WineNew = () => {
    const classes = useStyles();

    const [wine, setWine] = useState({});
    
    return (
        <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.title}>
                New Wine
            </Typography>
            <WineForm
                wine={wine}
                setWine={setWine}
                callApi={() => WinesAPI.create(wine)}
                redirectTo={wine => `/wines/${wine.objectId}`}
                buttonText="Create Wine"
                cancelPath="/" 
            />
        </Container>
    )
}

export default WineNew;