import {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Chart from "react-google-charts";
import WinesAPI from '../services/WinesAPI';
import Flavor from '../components/Flavor';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles( (theme) => ({
    tbd: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    paper: {
        padding: theme.spacing(1, 3),
    },
    grid: {
        marginBottom: theme.spacing(4),
    },
    title: {
        margin: theme.spacing(5, 1),
        wordWrap: 'break-word',
        textShadow: "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black",
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),       
        fontSize: '0.75rem',
        textAlign: 'center',
        wordSpacing: '9999px',
        '@media (min-width:600px)': {
            width: theme.spacing(10),
            height: theme.spacing(10),
            fontSize: '1rem',
          },
    },
    actionButtons: {
        margin: theme.spacing(1),
    },
    white: {
        color: theme.palette.secondary.main,
    },
    red: {
        color: theme.palette.primary.main,
    },
    separator: {
        border: '0',
        height: '0',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    }
}))

const Wine = ({match}) => {

    const classes = useStyles();

    const [wine, setWine] = useState({});
    const [redirect, setRedirect] = useState({});

    // run on component mounting
    // run only if it changes
    useEffect( () => {
        const fetchData = async () => {
            const {data} = await WinesAPI.show(match.params.objectId);
            console.log(data)
            if(data) 
                setWine(data)
            else {
                setRedirect( {pathname: "/404"} )
            }
        }
        fetchData();
    }, [match.params.objectId])

    const handleDelete = async e => {
        e.preventDefault();

        const {data} = await WinesAPI.destroy(wine.objectId);

        if(data)
            setRedirect( {pathname: "/"} )
        else
            setRedirect( {pathname: "/404"})
    }

    if (redirect.pathname) {
        return <Redirect to={redirect.pathname} />
    }

    const {objectId, 
            aromas, 
            variety, 
            barrelAged, 
            name, 
            withBottleAge, 
            flowers, 
            overview, 
            bonus, 
            fruits, 
            herbsAndSpices,
            sweetVersion,
            regions} = wine;

            console.log(fruits, aromas, flowers, bonus, regions);

            const regionsList = regions && regions.join(', ');


    return (
        <div>
            <Container maxWidth="md">
                <Typography 
                className={`${classes.title} ${variety === "white" ? classes.white : classes.red}`} 
                component="h1" 
                variant="h2" 
                align="center">
                    {name}
                </Typography>

            {/* All Flavors */} 
            <Grid className={classes.grid} container spacing={3} alignItems="center">
                {
                    !fruits || !fruits.length || fruits[0] === '' ? null :
                    <>               
                        <Grid item xs={3}>
                            <Avatar className={classes.avatar}>Fruits</Avatar>
                        </Grid>
                        <Grid item xs={9}>
                            <GridList cols={5}>
                                {fruits.map( (item, i) => <Flavor key={i} flavor={item} />)}
                            </GridList>
                        </Grid>
                        <Grid item xs={12}><hr className={classes.separator} /></Grid>
                    </>
                }

                {
                    !flowers || !flowers.length || flowers[0] === '' ? null :
                    <>               
                        <Grid item xs={3}>
                            <Avatar className={classes.avatar}>Flowers</Avatar>
                        </Grid>
                        <Grid item xs={9}>
                            <GridList cols={5}>
                                {flowers.map( (item, i) => <Flavor key={i} flavor={item} />)}
                            </GridList>
                        </Grid>
                        <Grid item xs={12}><hr className={classes.separator} /></Grid>
                    </>
                }

                {
                    !aromas || !aromas.length || aromas[0] === '' ? null :
                    <>               
                        <Grid item xs={3}>
                            <Avatar className={classes.avatar}>Aromas</Avatar>
                        </Grid>
                        <Grid item xs={9}>
                            <GridList cols={5}>
                                {aromas.map( (item, i) => <Flavor key={i} flavor={item} />)}
                            </GridList>
                        </Grid>
                        <Grid item xs={12}><hr className={classes.separator} /></Grid>
                    </>
                }

                {
                    !withBottleAge || !withBottleAge.length || withBottleAge[0] === '' ? null :
                    <>               
                        <Grid item xs={3}>
                            <Avatar className={classes.avatar}>with Bottle Age</Avatar>
                        </Grid>
                        <Grid item xs={9}>
                            <GridList cols={5}>
                                {withBottleAge.map( (item, i) => <Flavor key={i} flavor={item} />)}
                            </GridList>
                        </Grid>
                        <Grid item xs={12}><hr className={classes.separator} /></Grid>
                    </>
                }

                {
                    !barrelAged || !barrelAged.length || barrelAged[0] === '' ? null :
                    <>               
                        <Grid item xs={3}>
                            <Avatar className={classes.avatar}>Barrel Aged</Avatar>
                        </Grid>
                        <Grid item xs={9}>
                            <GridList cols={5}>
                                {barrelAged.map( (item, i) => <Flavor key={i} flavor={item} />)}
                            </GridList>
                        </Grid>
                        <Grid item xs={12}><hr className={classes.separator} /></Grid>
                    </>
                }

                {
                    !bonus || !bonus.length || bonus[0] === '' ? null :
                    <>               
                        <Grid item xs={3}>
                            <Avatar className={classes.avatar}>Bonus</Avatar>
                        </Grid>
                        <Grid item xs={9}>
                            <GridList cols={5}>
                                {bonus.map( (item, i) => <Flavor key={i} flavor={item} />)}
                            </GridList>
                        </Grid>
                        <Grid item xs={12}><hr className={classes.separator} /></Grid>
                    </>
                }
            </Grid>
            {/* End All Flavors */} 

            
            <Grid className={classes.grid} container spacing={4}>
                {
                    !overview ? null :
                    <>
                        <Grid item xs={12} sm={3}>
                            <Typography component="h2" variant="h6" color="textPrimary" paragraph>
                                Overview
                            </Typography>
                            <Typography variant="body1" color="textPrimary" paragraph>
                                {overview}
                            </Typography>
                        </Grid>
                    </>
                }

                {
                    !regions || !regions.length ? null :
                    <>
                        <Grid item xs={12} sm={9}>
                            <Typography component="h2" variant="h6" color="textPrimary" paragraph>
                                Where does it come from?
                            </Typography>
                            <Typography variant="body1" color="textPrimary" paragraph>
                                {regions && regions.join(', ')}
                            </Typography>
                            <Chart
                                width={'600px'}
                                height={'400px'}
                                chartType="GeoChart"
                                data={regions && ["Country", ...regions].map(r => Array(r))}
                                options={{
                                    defaultColor: `${variety === "white" ? '#ffd54f' : '#ce467b'}`,                                   
                                  }}
                                mapsApiKey={process.env.REACT_APP_GEOCHARTS_API_KEY}
                                rootProps={{ 'data-testid': '1' }}
                            />
                        </Grid>
                    </>
                }              
            </Grid>


            {/* Buttons */} 
            <Container maxWidth="sm" align="center">
                <Button 
                    component={Link} 
                    to={`/wines/${objectId}/edit`} 
                    className={classes.actionButtons}
                    variant="outlined" 
                    color="primary">
                    Edit Wine
                </Button> 
                <Button 
                    component={Link} 
                    to={""} 
                    onClick={handleDelete}
                    className={classes.actionButtons}
                    variant="outlined" 
                    color="primary">
                    Delete Wine
                </Button> 

            </Container>
            {/* End Buttons */} 


           </Container>
        </div>
    )
}

export default Wine;