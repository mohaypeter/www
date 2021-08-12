let data = [{
    photo: 'photos/p1.jpg',
    title: 'Osaka - Ancient house',
    description: 'Phasellus pharetra pulvinar iaculis. Fusce non vehicula nisi, eget condimentum velit. Duis vel nibh fringilla, vehicula diam et, posuere dolor. '
},{
    photo: 'photos/p2.jpg',
    title: 'Abandoned sunset',
    description: 'Sed metus nunc, facilisis in risus sit amet, pharetra mattis turpis. Donec interdum at quam eu interdum. Aliquam feugiat id magna elementum aliquam.  '
  },
  {
    photo: 'photos/p3.jpg',
    title: 'Peacefully field',
    description: 'liquam ornare at erat sit amet iaculis. Praesent id metus urna. Nunc ut tempus sem, ac rutrum massa. Duis id accumsan purus, eget condimentum dui. Nullam eget efficitur dui. Proin ut tortor aliquam, posuere velit non, venenatis ipsum. '
  },
  {
    photo: 'photos/p4.jpg',
    title: 'Bicycle and more...',
    description: 'Donec fermentum, orci et sollicitudin cursus, ante diam fringilla magna, vitae maximus tellus urna id elit. Sed nec odio sollicitudin, tincidunt augue ut, varius nisl. Mauris molestie convallis nulla, et tristique mauris interdum ac. '
  },
  {
    photo: 'photos/p5.jpg',
    title: 'Escape to nature',
    description: 'Nulla placerat ex ante, in varius libero vestibulum vitae. Phasellus risus sem, lacinia sit amet leo eu, dapibus tempus dolor. Vestibulum rutrum rhoncus est. Nulla et ante at ex mattis pulvinar.  '
  },
  {
    photo: 'photos/p6.jpg',
    title: '9/11 - never forget',
    description: 'Morbi volutpat ante nisl, nec suscipit tellus efficitur et. Praesent vitae elit fringilla, condimentum lacus eu, maximus augue. Ut imperdiet ligula sapien. '
  },
  {
    photo: 'photos/p7.jpg',
    title: 'Winter is coming...',
    description: 'Aliquam nec diam purus. Nulla facilisi. Etiam finibus, arcu et lobortis vehicula, lorem lacus porttitor purus, in vehicula nisi augue nec odio. Vivamus eu justo mauris. Nulla enim velit, ultricies ut arcu vel, volutpat eleifend libero. '
  },
  {
    photo: 'photos/p8.jpg',
    title: 'Croatia, relax',
    description: 'Curabitur pharetra, mauris a mollis sollicitudin, ipsum lorem pellentesque odio, eu malesuada felis sem at magna. Nunc pellentesque laoreet mattis. Integer id nibh sapien. Integer nisl mauris, hendrerit non interdum vitae, hendrerit vel nulla.  '
  }];
  

let currentPhoto = 0;
let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', data[photoNumber].photo);
  $('#photo-title').text(data[photoNumber].title);
  $('#photo-description').text(data[photoNumber].description);
}

loadPhoto(currentPhoto);

$('#arrow_box_right').click(() => {
  if(currentPhoto < (data.length-1)) {
    currentPhoto++;  
  }
  else {currentPhoto=0}
  
  loadPhoto(currentPhoto);
});

$('#arrow_box_left').click(() => {
  if(currentPhoto > 0) {
    currentPhoto--;  
  }
  else {currentPhoto=(data.length-1)}
  
  loadPhoto(currentPhoto);
});

let loadThumb = (thNumber) => {
  $('#thphoto').attr('src', data[thNumber].photo);
 }


/*data.forEach((titletext,index) => {
 
 $('#thumb_box').append(`<div class="thumbnail" data-index="${index}" 
  <img src="${(data[(index)].photo)}"> 
  <p2>${(data[(index)].title)}</p2></div>`);
  //$('p2').text(data[(index)].title);

  console.log((data[(index)].title))

  return;



  /*loadThumb(index);*/
  /*$('#thphoto_${index}').attr('src', data[index].photo);*/
  
  /*$('.thumbnail').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    $('#clicked').text(data[indexClicked]);
  });*/
//});





  


