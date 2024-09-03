setTimeout(() => {
    console.log('timeout 1')
}, 500);

console.log('start');

console.log('end');

setTimeout(() => {
    console.log('timeout 2')
}, 1000);

setTimeout(() => {
    console.log('timeout 3')
}, 750);

//Created this for better understanding of how sync and async get in the event loop (queue)