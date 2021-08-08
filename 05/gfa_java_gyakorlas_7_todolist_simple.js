

$('#button_addTodo').click(() => {
  $('ul').append('<li>' + $('#text_addTodo').val() + '</li>'); //input mező szöveg hozzáfűzése az li elemekhez
  console.log($('#text_addTodo').val()); // consolra az érték ellenőrzését
  $('#text_addTodo').val(""); // adatkiküldés után az inputmező legyen üres


  //li elemek közül a 'létrehozottakra' vonatkozóan:itemre klikk=> váltva: áthúz/normal
  $('li:last-child').click((event) => {
    $(event.target)
      .toggleClass('item_strike');
  });

  //egérmutatós 'kiválasztás' -> class hozzáadás-elvétel
  $('li:last-child')
    .hover(function () {
      $(this).addClass('marked_item');
    }, function () {
      $(this).removeClass('marked_item');

      // console.log($(this));
    });


});





