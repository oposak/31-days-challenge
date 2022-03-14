const assignment = document.getElementById('todo');
const add = document.querySelector('button');
const list = document.querySelector('ul');



add.addEventListener ('click', () => {
  //taking the todo name
  const todo = assignment.value;
  //creating a new ul element
  let createUl = document.createElement('li');
  let createLi = document.createTextNode(todo);
  createUl.appendChild(createLi);
  let element = document.querySelector('ul');
  element.appendChild(createUl);
  //pushing the value
  createLi.innerHTML = todo; 

  //clearing the container
  assignment.value = '';

  if (assignment === '') {
    alert('Enter the todo name');
  }
})

let checked = document.querySelector('li')

checked.addEventListener ('click', () => {
  list.remove('ckecked');
})
