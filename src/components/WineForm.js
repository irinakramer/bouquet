import {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import WinesAPI from '../services/WinesAPI';

const WineForm = ({wine, setWine, callApi, buttonText, cancelPath}) => {

    const [redirect, setRedirect] = useState({});

    const handleChange = e => {
        console.log("form changed");
        setWine(prevWine => ({
            ...prevWine,
            [e.target.name]: e.target.valueAsNumber || e.target.value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const data = await callApi();

        if (data) {
            setRedirect( {pathname: `/wines/${data.objectId}`})
        }
    }

    if(redirect.pathname) {
        return <Redirect to={redirect.pathname} />
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                name
                <input 
                    name="name"
                    defaultValue={""}
                    onChange={handleChange}
                />
            </label>
            <label>
                variety
                <input 
                    name="variety"
                    defaultValue={""}
                    onChange={handleChange}
                />
            </label>
            <button>{buttonText}</button>
            <Link to={cancelPath}>Cancel</Link>
        </form>
    )
}

export default WineForm;