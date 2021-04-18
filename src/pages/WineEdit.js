import {useState, useEffect} from 'react';

import WinesAPI from '../services/WinesAPI';
import WineForm from '../components/WineForm';

const WineEdit = ({match}) => {

    const [wine, setWine] = useState({});

    // fetch Wine data from show api
    useEffect( () => {
        const fetchData = async () => {
            const data = await WinesAPI.show(match.params.objectId);
            console.log(data)
            data ? setWine(data) : console.log("Error")
        }
        fetchData();
    }, [match.params.objectId])

    return (
        <div>
            <h1>Edit Wine</h1>
            <WineForm
                wine={wine}
                setWine={setWine}
                callApi={() => WinesAPI.update(wine)}
                buttonText="Update Wine"
                cancelPath={`/wines/${wine.objectId}`}
            />

        </div>
    )
}

export default WineEdit;