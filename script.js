


const ul = document.querySelector('ul');
let items = [];
const inputTextElement = document.querySelector('.textInput');

const getRandomNumber = () => Math.floor(Math.random() * 10000);

function addNewItem() { 
  var date = new Date();
  let inputTextElement = document.querySelector('.textInput');
  
  let formValidation = () => {
    if (inputTextElement.value === "") {
      inputTextElement.placeholder = "Post cannot be blank";
      console.log("failure");
    } else {
      console.log("successs");
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('button');
      const viewButton = document.createElement('button');
      const editButton = document.createElement('button');
      const firstSpan = document.createElement("span");
      const secondSpan = document.createElement("span");
      const label = document.createElement("label");
      const div = document.createElement("div");

  deleteButton.addEventListener("click", (event) => {
    const idLi = event.target.id;
    // console.log(idLi)
    var element = document.getElementById(idLi);
    element.remove();
    items = items.filter(item => item.id.toString() !== idLi)
    const myItemsStrAfter = JSON.stringify(items);
    localStorage.setItem('items', myItemsStrAfter)
  });


  // viewButton.addEventListener("click", (event) => {
  //   const idLi = event.target.parentElement.id;
  //   const item = items.find(item => item.id.toString() === idLi)
  //   const itemForLocalStorage = JSON.stringify(item)
  //   localStorage.setItem('item', itemForLocalStorage);
  //   // localStorage.setItem('item', found);

  //   // window.location=`view.html?id=${idLi}`;
  //   window.open(`view.html?id=${idLi}`, '_blank');
  // //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  // //     .then(response => response.json())
  // //     .then(json => console.log(json))
  // })

  editButton.addEventListener("click", (event) => {

    const idLi = event.target.id;
    const item = items.find(item => item.id.toString() === idLi)
    const id = item.id;
    const iidOfItem = JSON.stringify(id)
    localStorage.setItem('id', iidOfItem);
    window.open(`edit.html?id=${idLi}`, '_parent');

  //   const idLi = event.target.parentElement.id;
    
  //   inputTextElement.value = document.getElementById(idLi).value=
  //   li.getElementsByTagName('span')[0].textContent;

  //   event.target.parentElement.remove();
  //   items = items.filter(item => item.id.toString() !== idLi)
  //   const myItemsStrAfter = JSON.stringify(items);
  //   localStorage.setItem('items', myItemsStrAfter)
  })

  checkbox.addEventListener("click", (event) => {
    const idLi = event.target.id;
    const item = items.find(item => item.id.toString() === idLi)
    const divClass = document.getElementById(idLi)
    const labelFromParent = divClass.lastChild;
    const secondSpanFromLabel = labelFromParent.lastChild;
    const buttonDeleteFromSpan = secondSpanFromLabel.firstChild;
    const buttonEditFromSpan = secondSpanFromLabel.lastChild;
    console.log(buttonDeleteFromSpan)
    console.log(buttonEditFromSpan);

    if (item.isDone === true) {
      item.isDone = false;
      // console.log(item)
      // console.log(items);
      item.updatedAt = Date.now();
      divClass.classList.remove('line-through');

      buttonDeleteFromSpan.classList.remove('list-items-button-delete-line-through');
      buttonEditFromSpan.classList.remove('list-items-button-edit-line-through');
      buttonDeleteFromSpan.classList.add('list-items-button-delete');
      buttonEditFromSpan.classList.add('list-items-button-edit');

      const myItemsStrAfter = JSON.stringify(items);
    localStorage.setItem('items', myItemsStrAfter)
    } else {
      item.isDone = true;
      // console.log(item)
      // console.log(items);
      item.updatedAt = Date.now();
      divClass.classList.add('line-through')

      
      buttonDeleteFromSpan.classList.add('list-items-button-delete-line-through');
      buttonEditFromSpan.classList.add('list-items-button-edit-line-through');
      buttonDeleteFromSpan.classList.remove('list-items-button-delete');
      buttonEditFromSpan.classList.remove('list-items-button-edit');


      const myItemsStrAfter = JSON.stringify(items);
    localStorage.setItem('items', myItemsStrAfter)
    }
  })
  
  firstSpan.innerHTML = inputTextElement.value;
  // label.innerHTML = inputTextElement.value;

  deleteButton.innerText = 'delete';
  viewButton.innerHTML = 'view';
  editButton.innerHTML = 'edit';
  // viewButton.classList.add('list-items-button-view');
  deleteButton.classList.add('list-items-button-delete');
  editButton.classList.add('list-items-button-edit');
  checkbox.classList.add('regular-checkbox');

  label.append(firstSpan)
  secondSpan.append(deleteButton);
  // .append(viewButton);
  secondSpan.append(editButton);
  label.append(secondSpan);
  // checkbox.append(label)
  label.classList.add('list-items'); 
  div.classList.add('checkbox')
  // div.append(checkbox);
  // ul.append(div);

  // label.appendChild(document.createTextNode(row.name));
  // label.appendChild
  // ul.append(label)
  div.append(checkbox)
  div.append(label)
ul.append(div)

  


  let obj = {
    id: getRandomNumber(),
    value: inputTextElement.value,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    isDone: false
  };
  checkbox.setAttribute('id',obj.id);
  div.setAttribute('id',obj.id);
  checkbox.setAttribute('type', 'checkbox');
  label.setAttribute('for', obj.id)
  deleteButton.setAttribute('id', obj.id)
  editButton.setAttribute('id', obj.id)



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
    addNewItem();
  };
});

































function addItemToItemsFromLocalStorage() {
  const itemFromLocalStorage = JSON.parse(localStorage.getItem('items'));

  if (itemFromLocalStorage !== null) {
    console.log(itemFromLocalStorage)

        for(let i = 0; i < itemFromLocalStorage.length; i++){
          const item = itemFromLocalStorage[i];
          items.push(item)
        }

  console.log(items)
  
  }

  
}


addItemToItemsFromLocalStorage();
addItemToList();

function addItemToList() {




  for(let i = 0; i < items.length; i++) {
    const firstSpan = document.createElement("span");
    const label = document.createElement("label");

    const checkbox = document.createElement('input');
    const deleteButton = document.createElement('button');
    const viewButton = document.createElement('button');
    const editButton = document.createElement('button');
    const secondSpan = document.createElement("span");
    const div = document.createElement("div");


   const objectFromItems = items[i]
   const valueFromObject = objectFromItems.value;
   const idFromObj = objectFromItems.id;
  //  console.log(typeof idFromObj)
    firstSpan.innerHTML = valueFromObject;
    // console.log(label)
    // firstSpan.innerHTML = '';



    deleteButton.innerText = 'delete';
      viewButton.innerHTML = 'view';
      editButton.innerHTML = 'edit';
      // viewButton.classList.add('list-items-button-view');
      deleteButton.classList.add('list-items-button-delete');
      editButton.classList.add('list-items-button-edit');
      checkbox.classList.add('regular-checkbox');
    
      label.append(firstSpan)
      secondSpan.append(deleteButton);
      // .append(viewButton);
      secondSpan.append(editButton);
      label.append(secondSpan);
      // checkbox.append(label)
      label.classList.add('list-items'); 
      div.classList.add('checkbox')
      // div.append(checkbox);
      // ul.append(div);
    
      // label.appendChild(document.createTextNode(row.name));
      // label.appendChild
      // ul.append(label)
      div.append(checkbox)
      div.append(label)
    ul.append(div)
    
      
    
    
      
      checkbox.setAttribute('id',idFromObj);
      div.setAttribute('id',idFromObj);
      checkbox.setAttribute('type', 'checkbox');
      label.setAttribute('for', idFromObj)
      deleteButton.setAttribute('id', idFromObj)
      editButton.setAttribute('id', idFromObj)
    
      deleteButton.addEventListener("click", (event) => {
        const idLi = event.target.id;
        // console.log(idLi)
        var element = document.getElementById(idLi);
        element.remove();
        items = items.filter(item => item.id.toString() !== idLi)
        const myItemsStrAfter = JSON.stringify(items);
        localStorage.setItem('items', myItemsStrAfter)
      });
    
    
      // viewButton.addEventListener("click", (event) => {
      //   const idLi = event.target.parentElement.id;
      //   const item = items.find(item => item.id.toString() === idLi)
      //   const itemForLocalStorage = JSON.stringify(item)
      //   localStorage.setItem('item', itemForLocalStorage);
      //   // localStorage.setItem('item', found);
    
      //   // window.location=`view.html?id=${idLi}`;
      //   window.open(`view.html?id=${idLi}`, '_blank');
      // //   fetch('https://jsonplaceholder.typicode.com/todos/1')
      // //     .then(response => response.json())
      // //     .then(json => console.log(json))
      // })
    
      editButton.addEventListener("click", (event) => {
    
        const idLi = event.target.id;
        const item = items.find(item => item.id.toString() === idLi)
        const id = item.id;
        const iidOfItem = JSON.stringify(id)
        localStorage.setItem('id', iidOfItem);
        window.open(`edit.html?id=${idLi}`, '_parent');
    
      //   const idLi = event.target.parentElement.id;
        
      //   inputTextElement.value = document.getElementById(idLi).value=
      //   li.getElementsByTagName('span')[0].textContent;
    
      //   event.target.parentElement.remove();
      //   items = items.filter(item => item.id.toString() !== idLi)
      //   const myItemsStrAfter = JSON.stringify(items);
      //   localStorage.setItem('items', myItemsStrAfter)
      })
    
      checkbox.addEventListener("click", (event) => {
        const idLi = event.target.id;
        console.log(typeof idLi);
console.log(typeof items);
        const item = items.find(item => item.id.toString() === idLi)
        console.log(item)
        const divClass = document.getElementById(idLi)
        const labelFromParent = divClass.lastChild;
        const secondSpanFromLabel = labelFromParent.lastChild;
        const buttonDeleteFromSpan = secondSpanFromLabel.firstChild;
        const buttonEditFromSpan = secondSpanFromLabel.lastChild;
        console.log(buttonDeleteFromSpan)
        console.log(buttonEditFromSpan);
    
        if (item.isDone === true) {
          item.isDone = false;
          // console.log(item)
          // console.log(items);
          item.updatedAt = Date.now();
          divClass.classList.remove('line-through');
    
          buttonDeleteFromSpan.classList.remove('list-items-button-delete-line-through');
          buttonEditFromSpan.classList.remove('list-items-button-edit-line-through');
          buttonDeleteFromSpan.classList.add('list-items-button-delete');
          buttonEditFromSpan.classList.add('list-items-button-edit');
    
          const myItemsStrAfter = JSON.stringify(items);
        localStorage.setItem('items', myItemsStrAfter)
        } else {
          item.isDone = true;
          // console.log(item)
          // console.log(items);
          item.updatedAt = Date.now();
          divClass.classList.add('line-through')
    
          
          buttonDeleteFromSpan.classList.add('list-items-button-delete-line-through');
          buttonEditFromSpan.classList.add('list-items-button-edit-line-through');
          buttonDeleteFromSpan.classList.remove('list-items-button-delete');
          buttonEditFromSpan.classList.remove('list-items-button-edit');
    
    
          const myItemsStrAfter = JSON.stringify(items);
        localStorage.setItem('items', myItemsStrAfter)
        }
      })


    console.log(div)

  }

  // label.innerHTML = inputTextElement.value;

//   

}



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
