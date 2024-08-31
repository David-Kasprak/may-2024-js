function addToLocalStorage (arrayName,objToAdd) {
    const LSItem = localStorage.getItem('arrayName');
    if (!LSItem) {
        throw new Error('there is no such array');
    }
    const array = JSON.parse(LSItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}

addToLocalStorage('sessionsList', {});