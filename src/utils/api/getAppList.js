import getRSSJsonData from './getRSSJsonData.js';
import host from './host.js'
const getAppList = (n = 10) => {
    const api = `https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-free/all/${n}/explicit.json`;
    const url = `${host}/${api}`;
    return getRSSJsonData(url)
}

export default getAppList;