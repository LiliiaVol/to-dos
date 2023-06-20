const p = document.createElement('p');
const textFromLocalStorage = localStorage.getItem('item');
console.log(textFromLocalStorage);

function createElement() {
  const containet = document.querySelector('.container');
  p.innerText = textFromLocalStorage;
  containet.append(p)
}

createElement();