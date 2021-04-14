import WineRow from './WineRow';

const Wines = ({wines}) => {

    const allWines = wines.map( w => <WineRow key={w.id} name={w.name} variety={w.variety}/>)
    return (
        <div>
            <h1>All Wines</h1>
            {allWines}
        </div>
    )
}

export default Wines;