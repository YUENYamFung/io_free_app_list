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
const getRSSJsonData = async (url) => {
    var response = await getJSON(url);
    const body = await response.json();
    if (!body) {
        throw new Error(`response error`)
    }
    if (!body.feed) {
        throw new Error(`response error missing feed`)
    }
    if (!body['feed']['results']) {
        throw new Error(`response error missing feed results`)
    }
    let data = body['feed']['results'];
    data = data
        .map((item) => {
            let { artistName, name, id, artistId, genres } = item;
            let searchString = [artistName, name, id, artistId, ...genres.map(e => e['name'])].join(' ');
            return { ...item, searchString }
        })
    return {
        data,
        updated: body['feed']['updated']
    };
}
export default getRSSJsonData;