
$(document).ready(function(){
    let listElementsFirst = "<li class='box'> <div class='liText' id=`liText`>"
    let todoListText=""
    let listElementsSecund = "</div><span class='remove'><i class='material-icons'>delete</i></span>"
    let listElementsThird = "<div class='checkbox'>✓</div> </li>"

$("#add").click(() =>{ 
    todoListText=document.getElementById("inText").value
    if (todoListText !="") {
      $("ul").append(listElementsFirst+todoListText+listElementsSecund+listElementsThird) 
      document.getElementById("inText").value=""
    }
    
    
})

$(document).on('click', '.remove', function() {
    $(this).parent().remove();
})

$(`ul`).on(`click`, `div`, function() {
    $(this).toggleClass(`checkpipe`)
    $(this).closest('.box').children('.liText').toggleClass(`checkListText`);
}

)
}
)

                        
                         
/*                         
                     
$(document).on('click', '.checkbox', function() {

    $(".checkbox").click (()=> {
     if (tpt==false) {
        $(this).css("background-color", "green")
        $(this).css("color", "white")
        $(this).parent().css("color","lightgrey")

        console.log("false ág lefutott")
        } if (tpt==true) {
        $(this).css("background-color", "white")
        $(this).css("color", "green")
        $("li").css("color","black")
        console.log("else ág lefutott")
        }   
        tpt=!tpt
    })
    
})

    let szoveg =""
     szoveg=document.getElementById("inText").value
    $("ul").append("<li>"+szoveg+"<img src='img/trash.svg' alt='kuka'>"+"<div class='checkbox'>✓</div>"+'</li>') 
    $("div.checkbox").on('click',(event) => {

    })
   
}
)



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



