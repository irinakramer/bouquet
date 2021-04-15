import {useState, useEffect} from 'react';
import WineRow from './WineRow';
import WinesAPI from './services/WinesAPI';

const Wines = () => {

    const [fetching, setFetching] = useState(false);
    const [wines, setWines] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            setFetching(true);
            const data = await WinesAPI.index();
            console.log(data);
            data ? setWines(data) : console.log("ERROR");
            setFetching(false);
        }
        fetchData();

    }, []);

    //const allWines = wines.map( w => <WineRow key={w.id} name={w.name} variety={w.variety}/>)

    const allWhiteWines = wines.filter(w => w.variety === "white")
                            .map(w => <WineRow key={w.objectId} {...w}/>)

    const allRedWines = wines.filter( (w => w.variety === "red"))
                        .map(w => <WineRow key={w.objectId} {...w}/>
    )

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
                <h2>Whites:</h2>
                {allWhiteWines}

                <h2>Reds:</h2>
                {allRedWines}            
            </div>
        }           
        </>
    )
}

export default Wines;