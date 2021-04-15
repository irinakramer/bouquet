import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import WinesAPI from './services/WinesAPI';
import wineData from './services/data.json';

const Wine = ({match}) => {
    console.log({match});
    const wine = wineData.find(item => item.name === match.params.name)

    return (
        <div>
            Wine: {wine.name}
        </div>
    )
}

export default Wine;