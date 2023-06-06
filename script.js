const ul = document.querySelector('ul');
let items = [];
const inputTextElement = document.querySelector('.textInput');
const wrapper = document.querySelector('.wrapper');
const random = () => Math.floor(Math.random() * 10000);

function addNewElemenet() {
  let inputTextElement = document.querySelector('.textInput');
  
  let formValidation = () => {
    if (inputTextElement.value === "") {
      inputTextElement.placeholder = "Post cannot be blank";
      console.log("failure");
    } else {
      console.log("successs");
      const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  const viewButton = document.createElement('button');
  const editButton = document.createElement('button');
  const span = document.createElement("span");

  deleteButton.addEventListener("click", (event) => {
    const idLi = event.target.parentElement.id;
    event.target.parentElement.remove();
    items = items.filter(item => item.id.toString() !== idLi)
    const myItemsStrAfter = JSON.stringify(items);
    localStorage.setItem('items', myItemsStrAfter)
  });


  viewButton.addEventListener("click", (event) => {
    const idLi = event.target.parentElement.id;
    const item = items.find(item => item.id.toString() === idLi)
    const itemForLocalStorage = JSON.stringify(item)
    localStorage.setItem('item', itemForLocalStorage);
    // localStorage.setItem('item', found);

    // window.location=`view.html?id=${idLi}`;
    window.open(`view.html?id=${idLi}`, '_blank');
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  })

  editButton.addEventListener("click", (event) => {
    const idLi = event.target.parentElement.id;
    
    inputTextElement.value = document.getElementById(idLi).value=
    li.getElementsByTagName('span')[0].textContent;

    event.target.parentElement.remove();
    items = items.filter(item => item.id.toString() !== idLi)
    const myItemsStrAfter = JSON.stringify(items);
    localStorage.setItem('items', myItemsStrAfter)
  })
  
  span.innerHTML = inputTextElement.value;
  deleteButton.innerText = 'delete';
  viewButton.innerHTML = 'view';
  editButton.innerHTML = 'edit';
  viewButton.classList.add('list-items-button-view');
  deleteButton.classList.add('list-items-button-delete');
  editButton.classList.add('list-items-button-edit');

  li.append(span)
  li.append(deleteButton);
  li.append(viewButton);
  li.append(editButton);
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
  inputTextElement.placeholder = "Please enter text";
    }
  };

  formValidation();
  
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
