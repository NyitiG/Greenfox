//írd ki az
// “Igen, most rámkattintottál” üzenetet a parancssorra (console),
// mikor a felhasználó rákattint a gombra

$("#one").click(() => {
    console.log("Igen, most rámkattintottál");
})

/*
Mikor a felhasználó rákattint a második gombra, változtasd meg az első gomb feliratát
*/
 
$("#two").click(() => {

    $("#one").text("Már nem gombnak hívják")
}
)

/*
Mikor a felhasználó rákattint erre a gombra, változtasd meg mindhárom gomb háttérszínét
*/

$("button").click(() =>
    $("button").css("background-color","green")
)

/*
 Mikor a felhasználó rákattint az utolsó gombra:

    a beviteli mező értéke legyen kiolvasva,
    a gomb háttérszíne (background-color) legyen megváltoztatva a megadott színre!

Próbáld ki, működik-e különböző színekkel!

+ Szorgalmi
 */
let szamlalo =0
$("#three").click(() => {
    if (szamlalo==0) {
        let color = document.getElementById("in").value
$("#three").css("background-color", color)
szamlalo++
        
    } else {
        document.getElementById("in").value=""
        document.getElementById("in").value="Ennyi volt"
    }

}
)