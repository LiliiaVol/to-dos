const ul = document.querySelector('ul');
const items = [];
const inputTextElement = document.querySelector('.textInput');
const wrapper = document.querySelector('.wrapper');

function addItem() {
  items.push(inputTextElement.value);
  inputTextElement.value = "";
  const myItemsStrAfter = JSON.stringify(items);
  localStorage.setItem('items', myItemsStrAfter)
};

function addNewElemenet() {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  const viewButton = document.createElement('button');

  deleteButton.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });

  viewButton.addEventListener("click", (event) => {
    const item = event.target.parentElement;
    localStorage.setItem('item', item);
    window.location='view.html';
  })
  

  let inputTextElement = document.querySelector('.textInput');
  li.innerHTML = inputTextElement.value;
  deleteButton.innerText = 'delete';
  viewButton.innerHTML = 'view';
  viewButton.classList.add('list-items-button');
  deleteButton.classList.add('list-items-button-delete');

  li.append(deleteButton);
  li.append(viewButton);
  li.classList.add('list-items');
  ul.append(li);
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
