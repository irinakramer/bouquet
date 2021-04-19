import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import WinesAPI from '../services/WinesAPI';
import WineForm from '../components/WineForm';

const WineEdit = ({match}) => {

    const [wine, setWine] = useState({});
    const [redirect, setRedirect] = useState({});

    // fetch Wine data from show api
    useEffect( () => {
        const fetchData = async () => {
            const {data} = await WinesAPI.show(match.params.objectId);
            console.log(data)
            if(data) 
                setWine(data)
            else {
                setRedirect( {pathname: "/404"})
            }
        }
        fetchData();
    }, [match.params.objectId])

    if(redirect.pathname)
        return <Redirect to={redirect.pathname} />

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