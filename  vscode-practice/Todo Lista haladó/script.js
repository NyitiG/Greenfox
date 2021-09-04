$("#add").click(() =>{
    let szoveg =""
     szoveg=document.getElementById("inText").value
    $("ul").append("<li>"+szoveg+"<img src='img/trash.svg' alt='kuka'>"+"<div class='checkbox'>✓</div>"+'</li>') 
    $("div.checkbox").on('click',(event) => {

    })
    szoveg=""
}
)
let ch=false
$('.todoList > li > .checkbox').on('click', function() {
    if (ch==false) {
        $(this).css("background-color", "green")
        $(this).css("color", "white")
        $(this).parent().css("color","lightgrey")
        $(".material-icons").css("color","black")
        ch=true
        console.log("if ág lefutott")
        } else {
        $(this).css("background-color", "white")
        $(this).css("color", "green")
        $("li").css("color","black")
    
        ch=false
        console.log("else ág lefutott")
        }
            });

/*let ch=false
$(".checkbox").on('click', ()=>{
    if (ch==false) {
    $(".checkbox").css("background-color", "white")
    $(".checkbox").css("color", "green")
    $("li").css("color","lightgrey")
    ch=true
    console.log("if ág lefutott")
    } else {
    $(".checkbox").css("background-color", "green")
    $(".checkbox").css("color", "white")
    $("li").css("color","black")

    ch=false
    console.log("else ág lefutott")

        
    }

    
}
)
/*$("li").on('click',(event) => {})

let ch=false
$(".checkbox").on('click', ()=>{
    if (ch==false) {
    $(".checkbox").css("background-color", "white")
    $(".checkbox").css("color", "green")
    $("li").css("color","lightgrey")
    ch=true
    console.log("if ág lefutott")
    } else {
    $(".checkbox").css("background-color", "green")
    $(".checkbox").css("color", "white")
    $("li").css("color","black")

    ch=false
    console.log("else ág lefutott")

        
    }

    
}
)*/



