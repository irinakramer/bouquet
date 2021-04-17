import {useState} from 'react';

import WinesAPI from '../services/WinesAPI';
import WineForm from '../components/WineForm';

const WineEdit = () => {

    const [wine, setWine] = useState({})

    return (
        <div>
            <h1>Edit Wine</h1>
            <WineForm
                wine={wine}
                setWine={setWine}
                callApi={() => WinesAPI.update(wine)}
                buttonText="Edit Wine"
                cancelPath={`/wines/${wine.objectId}`}
            />

        </div>
    )
}

export default WineEdit;