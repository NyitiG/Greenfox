
let ch =false
$(".checkbox").click (()=> {
    if (ch==false) {
    $(".checkbox").css("background-color", "white")
    $(".checkbox").css("color", "green")
    ch=true
    } else {
    $(".checkbox").css("background-color", "green")
    $(".checkbox").css("color", "white")
    ch=false
        
    }

    
}
)