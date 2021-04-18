import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import WinesAPI from '../services/WinesAPI';
import Search from '../components/Search';

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
            <Link to={"/wines/new"}>New Wine</Link>

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
        </>
    )
}

export default Wines;