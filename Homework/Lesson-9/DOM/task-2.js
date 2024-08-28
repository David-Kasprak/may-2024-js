const array = ['Main','Products','About us','Contacts'];

const list = document.createElement("ul")

for (const item of array) {
    const li = document.createElement("li")
    li.innerText = item;
    list.appendChild(li);
}

document.body.appendChild(list)