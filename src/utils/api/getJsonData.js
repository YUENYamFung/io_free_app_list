// const request = require('request'); // This package has been deprecated

// CORS problem
// var fetchJson = require('fetch-json');

// still not working
// jsonp(url, opts, fn)
// import jsonp from 'jsonp';


// http2 error
// const got
import ky from 'ky';

const getJSON = (url) => {
    return ky(url);
}
const getJsonData = async (url) => {
    var response = await getJSON(url);
    const body = await response.json();
    return body;
}
export default getJsonData;