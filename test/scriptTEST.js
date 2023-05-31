const ul = document.querySelector('ul');
let items = [];
const inputTextElement = document.querySelector('.textInput');
const wrapper = document.querySelector('.wrapper');
const random = () => Math.floor(Math.random() * 10000);

function addNewElemenet() {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  const viewButton = document.createElement('button');
  const span = document.createElement("span");

  deleteButton.addEventListener("click", (event) => {
    const idLi = event.target.parentElement.id;
    event.target.parentElement.remove();
    items = items.filter(item => item.id.toString() !== idLi)
    const myItemsStrAfter = JSON.stringify(items);
    localStorage.setItem('items', myItemsStrAfter)
  });


  viewButton.addEventListener("click", (event) => {
    // const idLi = event.target.parentElement.id;
    // const item = items.find(item => item.id.toString() === idLi)
    // console.log(item)
    // // localStorage.setItem('item', found);

    // // window.location=`view.html?id=${idLi}`;
    // window.open(`view.html?id=${idLi}`, '_blank');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  })

  let inputTextElement = document.querySelector('.textInput');
  span.innerHTML = inputTextElement.value;
  deleteButton.innerText = 'delete';
  viewButton.innerHTML = 'view';
  viewButton.classList.add('list-items-button');
  deleteButton.classList.add('list-items-button-delete');

  li.append(span)
  li.append(deleteButton);
  li.append(viewButton);
  li.classList.add('list-items');
  ul.append(li);

  


  let obj = {
    value: inputTextElement.value,
    id: random()
  };
  li.setAttribute('id',obj.id);

  // const id = document.getElementById(obj.id)
  // console.log(id);


  function addItem() {
    items.push(obj);
    inputTextElement.value = "";
    const myItemsStrAfter = JSON.stringify(items);
    localStorage.setItem('items', myItemsStrAfter)
    console.log(items)
  };
  addItem();
  
};


inputTextElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addNewElemenet();
  };
});

// function getInformationAboutItem() {

// };

// HERE IS CEMETERY FOR CODE WHICH I DON'T USE BUT MAYBE I WILL NEED HIM IN FUTERE
// const test = function(e) {
//   e.target.parentElement.remove();
// };

// let i = 0;
//     while (i < items.length) {
//       if (items[i] === event.target.parentElement.textContent) {
//         items.splice(i, 1);
//         break;
//       } else {
//         ++i;
//       }
//     }
