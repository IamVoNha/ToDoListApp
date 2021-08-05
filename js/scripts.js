function newItem() {
  //Adding a new item to the list of items!
  let listItem = $('<li></li>');
  let inputValue = $('#input').val();
      listItem.append(inputValue);

  if (inputValue === '') {
      alert('You must write something!');
    } else {
      $('#list').append(listItem);
    }

  //crossing out item in list!
  listItem.on('dblclick',function crossOut() {
    listItem.toggleClass('strike');
  });

  //Adding the delete button "X"!
  let crossOutButton = $('<button class="crossOutButton"></button>');
  crossOutButton.append("X");
  listItem.append(crossOutButton);

  //adding class delete - from css!
  crossOutButton.on('click', deleteListItem);
  function deleteListItem() {
    listItem.addClass('delete')
  }

  //Reodering item list!
  $('#list').sortable();
}
