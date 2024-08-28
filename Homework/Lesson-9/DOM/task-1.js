const div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.innerText = 'Hello. world!'
document.body.appendChild(div);

const divClone = div.cloneNode(true);

document.body.appendChild(divClone)