import {useState} from 'react';
import WinesAPI from '../services/WinesAPI';
import WineForm from '../components/WineForm';

const WineNew = () => {

    const [wine, setWine] = useState({});
    
    return (
        <div>
            <h1>New Wine</h1>
            <WineForm
                wine={wine}
                setWine={setWine}
                callApi={() => WinesAPI.create(wine)}
                redirectTo={wine => `/wines/${wine.objectId}`}
                buttonText="Create Wine"
                cancelPath="/" 
            />
        </div>
    )
}

export default WineNew;