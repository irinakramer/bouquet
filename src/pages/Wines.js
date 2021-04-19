import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import WinesAPI from '../services/WinesAPI';
import Search from '../components/Search';
import Button from '@material-ui/core/Button';

const Wines = () => {

    const [fetching, setFetching] = useState(false);
    const [wines, setWines] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            setFetching(true);
            const data = await WinesAPI.index();
            console.log("fetched data: ", data);
            data ? setWines(data) : console.log("ERROR");
            setFetching(false);
        }
        fetchData();

    }, []);

    return (
        <>       
            {
                !fetching ? null : 
                <p>Loading ... </p>
            }
            {
                fetching ? null :
                <div>
                    <h1>All Wines</h1>
                    <Search wines={wines}  />
                </div>
            }  

            <Button 
                component={Link} 
                to={"/wines/new"} 
                variant="contained" 
                color="primary">
                    New Wine
            </Button>         
        </>
    )
}

export default Wines;