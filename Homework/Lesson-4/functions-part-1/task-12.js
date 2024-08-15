function swapElements (array, i1, i2) {
    let temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
    return array;
}

const myArray = [1,2,3]
swapElements(myArray, 0, 1)
console.log(myArray)