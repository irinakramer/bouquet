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
    grid: {
        marginBottom: theme.spacing(4),
    },
    title: {
        margin: theme.spacing(5, 1),
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        fontSize: '1rem',
        textAlign: 'center',
        wordSpacing: '9999px',
    },
    actionButtons: {
        margin: theme.spacing(1),
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
                <Typography className={classes.title} component="h1" variant="h2" align="center" color="textPrimary">
                    {name}
                </Typography>

            {/* All Flavors */} 
            <Grid className={classes.grid} container spacing={4} alignItems="center">
                {
                    !fruits || !fruits.length ? null :
                    <>               
                        <Grid item xs={3}>
                            <Avatar className={classes.avatar}>Fruits</Avatar>
                        </Grid>
                        <Grid item xs={9}>
                            <GridList cols={5}>
                                {fruits.map( (item, i) => <Flavor key={i} flavor={item} />)}
                            </GridList>
                        </Grid>
                    </>
                }

                {
                    !flowers || !flowers.length? null :
                    <>               
                        <Grid item xs={3}>
                            <Avatar className={classes.avatar}>Flowers</Avatar>
                        </Grid>
                        <Grid item xs={9}>
                            <GridList cols={5}>
                                {flowers.map( (item, i) => <Flavor key={i} flavor={item} />)}
                            </GridList>
                        </Grid>
                    </>
                }

                {
                    !aromas || !aromas.length ? null :
                    <>               
                        <Grid item xs={3}>
                            <Avatar className={classes.avatar}>Aromas</Avatar>
                        </Grid>
                        <Grid item xs={9}>
                            <GridList cols={5}>
                                {aromas.map( (item, i) => <Flavor key={i} flavor={item} />)}
                            </GridList>
                        </Grid>
                    </>
                }

                {
                    !withBottleAge || !withBottleAge.length ? null :
                    <>               
                        <Grid item xs={3}>
                            <Avatar className={classes.avatar}>with Bottle Age</Avatar>
                        </Grid>
                        <Grid item xs={9}>
                            <GridList cols={5}>
                                {withBottleAge.map( (item, i) => <Flavor key={i} flavor={item} />)}
                            </GridList>
                        </Grid>
                    </>
                }

                {
                    !barrelAged || !barrelAged.length ? null :
                    <>               
                        <Grid item xs={3}>
                            <Avatar className={classes.avatar}>Barrel Aged</Avatar>
                        </Grid>
                        <Grid item xs={9}>
                            <GridList cols={5}>
                                {barrelAged.map( (item, i) => <Flavor key={i} flavor={item} />)}
                            </GridList>
                        </Grid>
                    </>
                }

                {
                    !bonus || !bonus.length ? null :
                    <>               
                        <Grid item xs={3}>
                            <Avatar className={classes.avatar}>Bonus</Avatar>
                        </Grid>
                        <Grid item xs={9}>
                            <GridList cols={5}>
                                {bonus.map( (item, i) => <Flavor key={i} flavor={item} />)}
                            </GridList>
                        </Grid>
                    </>
                }
            </Grid>
            {/* End All Flavors */} 

            
            <Grid className={classes.grid} container spacing={4}>
                {
                    !overview ? null :
                    <>
                        <Grid item xs={3}>
                            <Typography component="h2" variant="h6" color="textPrimary" paragraph>
                                Overview:
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
                        <Grid item xs={9}>
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
                    color="primary"
                    size="small">
                    Edit Wine
                </Button> 
                <Button 
                    component={Link} 
                    to={""} 
                    onClick={handleDelete}
                    className={classes.actionButtons}
                    variant="outlined" 
                    color="primary"
                    size="small">
                    Delete Wine
                </Button> 

            </Container>
            {/* End Buttons */} 


           </Container>
        </div>
    )
}

export default Wine;