/*
Készíts egy eseményfigyelőt (EventListener), 
ami a gomb megnyomását követően megnöveli a második fejléc által megjelenített értéket

(kezdeti érték: 0)!
(Szorgalmi) Készíts egy működö “Csökkentés” gombot!
*/

let szamlalo = 0

$("#num").text(szamlalo)
$("#plusz").click (() => {
    szamlalo++
    $("#num").text(szamlalo)

}
)
$("#neg").click(() => {
    szamlalo--
    $("#num").text(szamlalo)
}
)