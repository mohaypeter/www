let color = 'purple';
let number = 10;
let word = "cool";

if (color === "purple") {
    $(".north").css("background-color","purple");

}
if (number > 100) {
    $("p.east").text('wow, de nagy szám!')
} else {
    $("p.east").text('ez csak egy közönséges szám...')
}

if (word === 'cool') {
    $("p.south").text('A DOM Ereje')
} else {
    $("p.east").text('A DOM Ereje')
}
