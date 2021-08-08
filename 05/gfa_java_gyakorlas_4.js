names_1 = ['Richard', 'Maria', 'John', 'Robert', 'Peter', 'Frederica'];

names_1.forEach((element) => {
  if (element === 'Robert') {
    $("ul").append('<li><strong>' + element + '</strong></li>')
  } else {
    $("ul").append('<li>' + element + '</li>')
  }
});

let additionalBlock = {
  title: "Beillesztve JavaScripttel",
  text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
};

//consolra konzolon olvasható
console.log(additionalBlock.title);
console.log(additionalBlock.text);

//képernyőre (js kóddal)
document.write('<h1>' + additionalBlock.title + '</h1>');
document.write('<p>' + additionalBlock.text + '</p>');

//html kódhoz hozzáfűzi jqury kóddal
$('body').append(
  '<h1>' + additionalBlock.title + '</h1>'
);

$('body').append(
  '<p>' + additionalBlock.text + '</p>'
);



