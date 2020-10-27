import getRSSJsonData from './getRSSJsonData.js';
import host from './host.js'

const getAppRecommendation = () => {
    const api = `https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-grossing/all/10/explicit.json`;
    const url = `${host}/${api}`;
    return getRSSJsonData(url)
}

export default getAppRecommendation;