import {useState} from 'react';
import {Link} from 'react-router-dom';

const WineForm = ({wine, setWine, buttonText, cancelPath}) => {

    const handleChange = e => {
        console.log("form changed");
        setWine(prevWine => ({
            ...prevWine,
            [e.target.value]: e.target.value
        }))
    }

    return (
        <form onSubmit={handleChange}>
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