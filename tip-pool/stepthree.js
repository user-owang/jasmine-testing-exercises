// expects a table row element, appends a newly created td element that serves as a delete button
function appendDeleteBtn(tr) {
  let newTd = document.createElement('td');
  newTd.innerText = 'X';
  newTd.addEventListener('click', deleteParent);
  newTd.classList.add('delete');
  tr.append(newTd);

};

// deletes parent element of a given click event target
function deleteParent(event) {
  if(event){
    event.target.parentElement.remove();
    removeFromArray(event.target);
  } else{
    clickTar.parentElement.remove();
    removeFromArray(clickTar);
  }
  updateServerTable();
  updateSummary();
};

//removes from allServers or allPayments
function removeFromArray(target) {
  let parentId = target.parentElement.id;
    if (parentId.indexOf('server') > -1) {
      delete allServers[parentId];
    } else if (parentId.indexOf('payment') > -1) {
      delete allPayments[parentId];
    }
};