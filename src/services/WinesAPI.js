const baseUrl = 'https://parseapi.back4app.com/classes/Wine';

const memberUrl = objectId => `${baseUrl}/${objectId}`;

const authHeaders = {
    'X-Parse-Application-Id': process.env.REACT_APP_PARSE_APPLICATION_ID,
    'X-Parse-Javascript-Key': process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
}

const handleAPIErrors = response => {
    if(!response.ok) {
        console.log("Error!", response)
    }
    return response.json();
}

const index = () => {
    return fetch(baseUrl, {headers: authHeaders})
        .then(handleAPIErrors)
        .then(data => data.results)
}

const show = objectId => {
    return fetch(memberUrl(objectId), {headers: authHeaders})
        .then(handleAPIErrors)
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
}

// TODO: fix API error - 400, 404
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
  }

const WinesAPI = {
    index,
    show,
    destroy,
    create,
    update
};

export default WinesAPI;