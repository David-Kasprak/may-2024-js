const form = document.getElementById('form1');
const approved = document.getElementById('approved');
const denied = document.getElementById('denied');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (this.age.value >= 18) {
    approved.style.display = 'block';
    }
    else {
        denied.style.display = 'block';
    }
    console.log(this.age.value)
})