import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import WinesAPI from './services/WinesAPI';
import Flavor from './Flavor';

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

    const handleDelete = async e => {
        e.preventDefault();

        const data = await WinesAPI.destroy(wine.objectId);

        if(data) 
            console.log("Wine deleted")
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
            regions} = wine;
    
    return (
        <div>
            <h1>{name}</h1>     
            <ul>Fruits: {fruits && fruits.map( (item, i) => <Flavor key={i} value={item} />)}</ul>
            <ul>Flowers: {flowers && flowers.map( (item, i) => <Flavor key={i} value={item} />)}</ul>
            <ul>Bonus: {bonus && bonus.map( (item, i) => <Flavor key={i} value={item} />)}</ul>
            <ul>{aromas && aromas.map( (item, i) => <Flavor key={i} value={item} />)}</ul>

            <h3>Overview:</h3>
            <p>{overview}</p>

            <h3>Where does it come from?</h3>
            <ul>{regions && regions.map( (item, i) => <li key={i}>{item}</li>)}</ul>
           
           <Link to={""} onClick={handleDelete}>Delete</Link>
        </div>
    )
}

export default Wine;