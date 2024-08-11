let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// ----------------- CHAT GPT CODE ------------------------

// let ul = document.createElement('ul')
//
// for (let i = 0; i < listOfItems.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = listOfItems[i];
//     ul.appendChild(li);
// }
// document.body.appendChild(ul);

//------------------ MY CODE -------------------------------

document.write(`<ul>`);
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`)
}
document.write(`</ul>`);