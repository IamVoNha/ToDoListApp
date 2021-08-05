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
  listItem.on('dbclick',function crossOut() {
    listItem.toggleClass('strike');
  });
