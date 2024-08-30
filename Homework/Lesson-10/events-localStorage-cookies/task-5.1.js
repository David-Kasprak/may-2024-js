const sessionsList = JSON.parse(localStorage.getItem('sessionsList'));

for (const sessionsListElement of sessionsList) {
    const div = document.createElement("div");
    div.innerText = sessionsListElement;
    document.body.appendChild(div);
}