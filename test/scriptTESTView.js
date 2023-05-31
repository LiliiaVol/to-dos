const p = document.createElement('p');
const textFromLocalStorage = localStorage.getItem('item');

function createElement() {
  const containet = document.querySelector('.container');
  p.innerText = textFromLocalStorage;
  containet.append(p)
}

createElement();