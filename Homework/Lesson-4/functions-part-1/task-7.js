function createList (listItemContent, counter) {
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${listItemContent}</li>`)
    }
    document.write(`</ul>`)
}
createList('Hello', 5);