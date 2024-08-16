function createList (listItemContent) {
    let list = `<ul>
        <li>${listItemContent}</li>
        <li>${listItemContent}</li>
        <li>${listItemContent}</li>
    </ul>`
    document.write(list);
}
createList(`content`);