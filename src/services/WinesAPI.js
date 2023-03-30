const baseUrl = 'https://parseapi.back4app.com/classes/Wine';

const memberUrl = objectId => `${baseUrl}/${objectId}`;

const authHeaders = {
    'X-Parse-Application-Id': process.env.REACT_APP_PARSE_APPLICATION_ID,
    'X-Parse-Javascript-Key': process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
}

const reformatResponseData = response => {

    const reformatWine = (wine) => {
        const {objectId, name, variety, aromas, flowers, fruits, bonus, barrelAged, withBottleAge, herbsAndSpices, sweetVersion, overview, regions} = wine;
        
        return {objectId, name, variety, aromas, flowers, fruits, bonus, barrelAged, withBottleAge, herbsAndSpices, sweetVersion, overview, regions};
    }
  
    let data = response.data;
    if (data.results && Array.isArray(data.results))
      data = data.results.map(w => reformatWine(w));
    else
      data = reformatWine(data);
  
    return {data};
  }

  const handleAPIErrors = response => {
  
    if (!response.ok) {
      return response.json().then(data => {
        console.log("ERROR!", data);
        let errors = data.error;
        return {errors};
      });
    }
    else 
      return response.json().then(data => ({data}) );
  }

const index = () => {
    return fetch(baseUrl, {headers: authHeaders})
        .then(handleAPIErrors)
        .then(reformatResponseData);
}

const show = objectId => {
    return fetch(memberUrl(objectId), {headers: authHeaders})
        .then(handleAPIErrors)
        .then(reformatResponseData);
}

const destroy = objectId => {
    return fetch(memberUrl(objectId), {
        method: 'DELETE',
        headers: authHeaders
    })
    .then(handleAPIErrors)
}

const create = wine => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...authHeaders  
        },
        body: JSON.stringify(wine)
    })
    .then(handleAPIErrors)
    .then(reformatResponseData);
}

const update = wine => {
    return fetch(memberUrl(wine.objectId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...authHeaders
        },
        body: JSON.stringify(wine)
    } )
    .then(handleAPIErrors)
    .then(reformatResponseData);
  }

const WinesAPI = {
    index,
    show,
    destroy,
    create,
    update
};

export default WinesAPI;