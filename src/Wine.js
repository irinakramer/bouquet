import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import WinesAPI from './services/WinesAPI';

const Wine = ({match}) => {

    const [wine, setWine] = useState({});

    // run on component mounting
    // run only if it changes
    useEffect( () => {
        const fetchData = async () => {
            const data = await WinesAPI.show(match.params.objectId);
            console.log(data)
            data ? setWine(data) : console.log("Error")
        }
        fetchData();
    }, [match.params.objectId])

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
            regions} = wine;


    return (
        <div>
            Wine: {name}
        </div>
    )
}

export default Wine;