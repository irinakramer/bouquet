import {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

const WineForm = ({wine, setWine, callApi, buttonText, redirectTo, cancelPath}) => {

    const [errors, setErrors] = useState([]);
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

        const {data, errors} = await callApi();
        console.log("wineform data", data)

        if (data) {
            setRedirect( {
                pathname: redirectTo(data)
            })
        } else {
            setErrors(errors);
        }
    }

    if(redirect.pathname) {
        return <Redirect to={redirect.pathname} />
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                !errors.length ? null :
                <div>
                    <h2>{errors.length} error(s) prohibited this wine from being created.</h2>
                    <ul>
                        {errors.map((e, i) => <li key={i}>{e}</li>)}
                    </ul>
                </div>
                    
            }
            <label>
                name
                <input 
                    name="name"
                    defaultValue={wine.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                variety
                <input 
                    name="variety"
                    defaultValue={wine.variety}
                    onChange={handleChange}
                />
            </label>
            <label>
                aromas
                <input 
                    name="aromas"
                    defaultValue={wine.aromas}
                    onChange={handleChange}
                />
            </label>
            <label>
                flowers
                <input 
                    name="flowers"
                    defaultValue={wine.flowers}
                    onChange={handleChange}
                />
            </label>
            <label>
                fruits
                <input 
                    name="fruits"
                    defaultValue={wine.fruits}
                    onChange={handleChange}
                />
            </label>
            <label>
                with bottle age
                <input 
                    name="withBottleAge"
                    defaultValue={wine.withBottleAge}
                    onChange={handleChange}
                />
            </label>
            <label>
                barrel aged
                <input 
                    name="barrelAged"
                    defaultValue={wine.barrelAged}
                    onChange={handleChange}
                />
            </label>
            <label>
                bonus
                <input 
                    name="bonus"
                    defaultValue={wine.bonus}
                    onChange={handleChange}
                />
            </label>
            <label>
                overview
                <input 
                    name="overview"
                    defaultValue={wine.overview}
                    onChange={handleChange}
                />
            </label>
            <label>
                where does it come from?
                <input 
                    name="regions"
                    defaultValue={wine.regions}
                    onChange={handleChange}
                />
            </label>
            <button>{buttonText}</button>
            <Link to={cancelPath}>Cancel</Link>
        </form>
    )
}

export default WineForm;