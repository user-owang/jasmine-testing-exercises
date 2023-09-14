// expects a table row element, appends a newly created td element that serves as a delete button
function appendDeleteBtn(tr) {
  let newTd = document.createElement('td');
  newTd.innerText = 'X';
  newTd.addEventListener('click', deleteParent);
  tr.append(newTd);

};

//deletes parent element of a given click event target
function deleteParent(event) {
  event.target.parentElement.remove();
};