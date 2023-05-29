const ul = document.querySelector('ul');
const items = [];
const inputTextElement = document.querySelector('.textInput');
const wrapper = document.querySelector('.wrapper');
const div = document.querySelector('.red-color');

function addItemToArr(item) {
  items.push(item.textContent);
  console.log(items);
  inputTextElement.value = "";
};

function addNewElemenet() {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
// !!!!!!!!!!!!!!!!!!!!!!!!!
  let lis = document.querySelector(".wrapper").getElementsByTagName("li");
  // console.log(lis)
// !!!!!!!!!!!!!!!!!!!!!!!!!
  deleteButton.addEventListener("click", (event) => {

    // console.log(event.target.parentElement.textContent)
    // event.target.parentElement.value = "1"
    
    let i = 0;
    while (i < items.length) {
      if (items[i] === event.target.parentElement.textContent) {
        items.splice(i, 1);
        break;
      } else {
        ++i;
      }
    }

    // for (let i = 0; i < items.length; i++) {
    //   if (event.target.parentElement.textContent === items[i]) {
    //     items.indexOf(items[i])
    //   }
    // }
    console.log("target", event.target);
    event.target.parentElement.remove();
// !!!!!!!!!!!!!!!!!!!!!!!!!
    let index = event.target.parentElement;
    console.log(index);
// !!!!!!!!!!!!!!!!!!!!!!!!!
    // items = items.filter(el => el.id !== event.target.id);
    // event.target.style.backgroundColor = 'blue';
  });

  let inputTextElement = document.querySelector('.textInput');
  li.innerHTML = inputTextElement.value;
  deleteButton.innerText = 'delete';
  deleteButton.classList.add('list-items-button');

  // deleteButton.addEventListener('onclick', deleteItem())
  // deleteButton.setAttribute("onclick", test);
  // deleteButton.onclick = test;

  li.append(deleteButton);
  li.classList.add('list-items');
  ul.append(li);
  addItemToArr(li);
};

inputTextElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log('Enter key pressed');
    addNewElemenet();
  };
});

const deleteItemFromArr = () => {
  console.log("deleteItem");
};

// div.addEventListener("click", setBackground);

// function setBackground(color) {
//   div.style.backgroundColor = 'color';
// };
// function setBackground() {
//   this.style.backgroundColor = 'red';
// };

// div.addEventListener('mouseover', setBackground('green'))
// // div.addEventListener('mouseout', setBackground)


// div.addEventListener('click', changeColorBlue)

// function changeColorBlue() {
//   div.style.backgroundColor = 'blue';
// };

// div.addEventListener('dblclick', changeColorPurple)

// function changeColorPurple() {
//   div.style.backgroundColor = 'purple';
// };

// HERE IS CEMETERY FOR CODE WHICH I DON'T USE BUT MAYBE I WILL NEED HIM IN FUTERE
// const test = function(e) {
//   e.target.parentElement.remove();
// };
