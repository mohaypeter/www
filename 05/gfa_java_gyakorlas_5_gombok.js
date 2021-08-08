$('#button_1').click(() => {
  (console.log('Igen, most rámkattintottál'))
});

$('#button_2').click(() => {
  ($("#button_1").text('Smile!'))
});

var counter = 0;

$('#button_3').click(() => {
  /*Három gomb működésére */
  //($('#button_1, #button_2, #button_3').css('background-color','purple'))


  counter = counter + 1;
  if (counter < 2) {
    /* Színváltásra (3. gomb háttere), változóval */
    ($('#button_3').css('background-color', $('#color_change').val()))
    console.log($('#color_change').val())
    console.log('számláló:' + counter)
  } else {
    $('body').append(
      '<p>' + 'Csak egyszer lehet megváltoztatni a gomb hátterének színét!' + '</p>'
    );
  }
  console.log($('#color_change').val())
  console.log('számláló:' + counter)
});