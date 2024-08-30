const form = document.getElementById('form1');
const div = document.getElementById('result-info');

form.addEventListener("submit", function (eventObject){
    eventObject.preventDefault();

    const userInfo= [];

    userInfo.push(this.name.value);
    userInfo.push(this.surname.value);
    userInfo.push(this.age.value);

    const userName = document.createElement("h3")
    userName.innerText = userInfo[0];
    const userSurname = document.createElement("h3")
    userSurname.innerText = userInfo[1];
    const userAge = document.createElement("p")
    userAge.innerText = userInfo[2];

    div.append(userName, userSurname, userAge);
    div.style.display = `block`;

})