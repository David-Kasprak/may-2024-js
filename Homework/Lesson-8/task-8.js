const user = {id: 1, name: 'alex', age: 30, greeting1 () {}, greeting2 () {}, greeting3 () {}}

const copyObject = (object => {
    if (object) {
        let functions = [];
    for (const key in object) {
        if (typeof object[key] === 'function') {
            const functionClone = object[key].bind({});
            functions.push({functionClone, key});
        }
    }
        const clonedObj = JSON.parse(JSON.stringify(object))

        for (func of functions) {
            clonedObj[func.key] = func.functionClone;
        }
        console.log(clonedObj)
    }
    else {
        throw new Error('Not an object')
    }
})

copyObject(user)