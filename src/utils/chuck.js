const chuck = (arr, n) => {
    if (!Array.isArray(arr)) {
        return;
    }
    let tmp = [...arr];
    const result = [];
    while (tmp.length > 0) {
        result.push(tmp.splice(0, n));
    }
    return result;
}

export default chuck;