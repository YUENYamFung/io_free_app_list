
const search = (searchString = '', target = '') => {
    if (target.length <= 0) {
        return true;
    }
    // let normalCase = [].concat(target.split(/[\s,\t]+/))
    //     .filter(e => e)
    //     .some(targetItem => searchString.indexOf(targetItem) >= 0);
    target = target.toLowerCase();
    searchString = searchString.toLowerCase();
    let caseInsensitive = [].concat(target.split(/[\s,\t]+/))
        .filter(e => e)
        .some(targetItem => searchString.indexOf(targetItem) >= 0);
    return caseInsensitive;
}

export default search;