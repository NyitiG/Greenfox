// első feladat
/* 
Hozz létre egy tömböt, ami tartalmazza a saját neved, valamint azon kívül néhány másik nevet is
A forEach ciklus használatával add hozzá a neveket egy listához (<ul>)
(Szorgalmi) A saját neved legyen félkövér

*/

let names = ["Gábor", "Rozi", "Vivien"]
let i =0
names.forEach(function () {
    if (i==0) {
        $("ul").append(`<li> <b>`+names[i]+`</b></li>`)
    } else
    $("ul").append(`<li>`+names[i]+`</li>`)
    i++
})

// második feladat

/*
    Hozd létre a következő objektumot:

let additionalBlock = {
  title: "Beillesztve JavaScripttel",
  text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
};

    Adj új tartalmat az oldal végéhez: a title legyen egy fejlécben (pl. <h1>), a text pedig egy bekezdésben (<p>)


*/

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
}

$("ul").append(`<h1>`+additionalBlock.title+`</h1>`)
console.log("itt vagyok")
$("h1:last-child").append(`<p>`+additionalBlock.text+ `</p>`)