import {Link} from 'react-router-dom';

const WineRow = ({objectId, name, variety}) => {
    return (
        <div>
            <Link to={`/wines/${name}`}>{name} - {variety}</Link>
            
        </div>
    )
}

export default WineRow;