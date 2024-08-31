const input = document.getElementById('input');
const div = document.getElementById('result-div');

input.oninput = function () {
    const kilos = +this.value;
    const result = kilos * 2.2;
    div.innerText = result;
}