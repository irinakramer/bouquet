import {useState} from 'react';
import WineRow from '../components/WineRow';

const Search = ({wines}) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    const results = !searchTerm
                ? wines
                : wines.filter( w => 
                    w.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div>
            Search:
            <input 
                type="text"
                placeholder="Search wines"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {results.map( w => <WineRow key={w.objectId} {...w} />)}
            </ul>
        </div>
    )
}

export default Search;