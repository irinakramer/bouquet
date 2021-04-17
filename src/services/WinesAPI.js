const baseUrl = 'https://parseapi.back4app.com/classes/Wine';

const memberUrl = objectId => `${baseUrl}/${objectId}`;

const authHeaders = {
    'X-Parse-Application-Id': process.env.REACT_APP_PARSE_APPLICATION_ID,
    'X-Parse-Javascript-Key': process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
}

const index = () => {
    return fetch(baseUrl, {headers: authHeaders})
        .then(response => response.json())
        .then(data => data.results)
}

const show = objectId => {
    return fetch(memberUrl, {headers: authHeaders})
        .then(response => response.json())
}

const destroy = objectId => {
    return fetch(memberUrl(objectId), {
        method: 'DELETE',
        headers: authHeaders
    })
    .then(response => response.json())
}

const WinesAPI = {
    index,
    show,
    destroy
};

export default WinesAPI;