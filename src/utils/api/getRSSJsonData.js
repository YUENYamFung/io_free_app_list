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