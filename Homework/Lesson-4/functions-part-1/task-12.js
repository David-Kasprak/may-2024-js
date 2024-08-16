function swapElements (array, i1, i2) {
    let temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
    return array;
}
console.log(swapElements([1, 2, 3, 4], 0, 1));