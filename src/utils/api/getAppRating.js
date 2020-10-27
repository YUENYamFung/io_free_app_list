var store = require('app-store-scraper');
const getAppRating = (id) => {
    return store.app({ id,country:'hk', ratings: true })
}

export default getAppRating;