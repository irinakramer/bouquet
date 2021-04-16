const baseUrl = 'https://parseapi.back4app.com/classes/Wine';

const authHeaders = {
    'X-Parse-Application-Id': process.env.REACT_APP_PARSE_APPLICATION_ID,
    'X-Parse-Javascript-Key': process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
}

const index = () => {
    return fetch(baseUrl, {headers: authHeaders})
        .then(response => response.json())
        .then(data => data.results)
}

const show = (objectId) => {
    return fetch(`${baseUrl}/${objectId}`, {headers: authHeaders})
        .then(response => response.json())
}

const WinesAPI = {
    index,
    show
};

export default WinesAPI;