const textFromLocalStorage = JSON.parse(localStorage.getItem('item'));
const input = document.querySelector('.input-for-edit');
const button = document.querySelector('.button-for-submit');

function addItemToInput() {
    input.value = textFromLocalStorage.value;
    console.log(textFromLocalStorage)
    button.addEventListener("click", (event) => {



        event.window.open(`index.html?id=${idLi}`, '_blank');
    })
};
addItemToInput();


//   const idLi = event.target.parentElement.id;
    
  //   inputTextElement.value = document.getElementById(idLi).value=
  //   li.getElementsByTagName('span')[0].textContent;

  //   event.target.parentElement.remove();
  //   items = items.filter(item => item.id.toString() !== idLi)
  //   const myItemsStrAfter = JSON.stringify(items);
  //   localStorage.setItem('items', myItemsStrAfter)