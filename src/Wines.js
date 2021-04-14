import WDB from './WDB';
import Wine from './Wine';

const Wines = ({wines}) => {

    const allWines = wines.map( w => <li>{w.name}</li>)
    return (
        <div>
            <h1>All Wines</h1>
            {allWines}
            <Wine wines={WDB.wines} />
        </div>
    )
}

export default Wines;