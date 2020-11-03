import getJsonData from './getJsonData.js';
import host from './host.js'
const getAppInfo = (id) => {

    const api = `https://itunes.apple.com/lookup?id=${id}&country=hk`;
    const url = `${host}/${api}`;
    return getJsonData(url).then(({ resultCount, results }) => {
        if (!(resultCount > 0)) {
            return ({})
        } else {
            return ({ ...results[0] })
        }
    })
}

export default getAppInfo;