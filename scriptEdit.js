const idFromLocalStorage = JSON.parse(localStorage.getItem('id'));
let items = JSON.parse(localStorage.getItem('items'));
// console.log(typeof idFromLocalStorage)
const input = document.querySelector('.input-for-edit');
const buttonSave = document.querySelector('.list-items-button-edit');
const buttonHome = document.querySelector('.list-items-button-home');
const item = items.find(item => item.id === idFromLocalStorage)

function addItemToInput() {
    input.value = item.value;
    console.log(item)
};
addItemToInput();
// console.log(typeof buttonHome)
buttonSave.addEventListener("click", (event) => {
  const inputTextElement = document.querySelector('.input-for-edit');
  console.log(inputTextElement)
  const item = items.find(item => item.id === idFromLocalStorage)
  console.log(typeof item)

  item.value = inputTextElement.value;
  item.updatedAt = Date.now();
  console.log(item)
  console.log(items);
  const myItemsStrAfter = JSON.stringify(items);
    localStorage.setItem('items', myItemsStrAfter)
    window.open(`index.html`, '_parent');

})

buttonHome.addEventListener("click", (event) => {
  window.open(`index.html`, '_parent');

})


input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const inputTextElement = document.querySelector('.input-for-edit');
  console.log(inputTextElement)
  const item = items.find(item => item.id === idFromLocalStorage)
  console.log(typeof item)

  item.value = inputTextElement.value;
  item.updatedAt = Date.now();
  console.log(item)
  console.log(items);
  const myItemsStrAfter = JSON.stringify(items);
    localStorage.setItem('items', myItemsStrAfter)
    window.open(`index.html`, '_parent');
  };
});


//   const idLi = event.target.parentElement.id;
    
  //   inputTextElement.value = document.getElementById(idLi).value=
  //   li.getElementsByTagName('span')[0].textContent;

  //   event.target.parentElement.remove();
  //   items = items.filter(item => item.id.toString() !== idLi)
  //   const myItemsStrAfter = JSON.stringify(items);
  //   localStorage.setItem('items', myItemsStrAfter)