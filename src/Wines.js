import {useState, useEffect} from 'react';
import WineRow from './WineRow';
import WinesAPI from './services/WinesAPI';

const Wines = () => {

    const [wines, setWines] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const data = await WinesAPI.index();
            console.log(data);
            data ? setWines(data) : console.log("ERROR");
        }
        fetchData();

    }, []);

    //const allWines = wines.map( w => <WineRow key={w.id} name={w.name} variety={w.variety}/>)

    const whiteWines = wines.filter( (w => w.variety === "white"))
    const allWhiteWines = whiteWines.map(ww => 
        <WineRow key={ww.objectId} name={ww.name} variety={ww.variety}/>
    )

    const redWines = wines.filter( (w => w.variety === "red"))
    const allRedWines = redWines.map(rw => 
        <WineRow key={rw.objectId} name={rw.name} variety={rw.variety}/>
    )

    return (
        <div>
            <h1>All Wines</h1>
            <h2>Whites:</h2>
            {allWhiteWines}

            <h2>Reds:</h2>
            {allRedWines}
            
        </div>
    )
}

export default Wines;