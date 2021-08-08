var counter = 0;

$('#button_increase').click(() => {
  counter++; /* azonos: counter = counter+1;*/
  $('h2').text(counter);
});

$('#button_decrease').click(() => {
  counter--; /* azonos: counter = counter-1;*/
  $('h2').text(counter);
});