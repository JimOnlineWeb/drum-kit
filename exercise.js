const drums = document.querySelectorAll(".drum").length

for (let i=0; i<drums; i++){

 
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    let buttonHTML = this.innerHTML
    doSound(buttonHTML);
})
}

    document.addEventListener("keydown", function (event) {
        doSound(event.key)
    })


function doSound(key){

    switch(key){
        case "1": 
        new Audio("sounds/tom-1.mp3").play();
        break;
        
        case "2": 
        new Audio("sounds/tom-2.mp3").play();
        break;
        
        case "2": 
        new Audio("sounds/tom-2.mp3").play();
        break;

        case "3": 
        new Audio("sounds/tom-3.mp3").play();
        break;

        case "4": 
        new Audio("sounds/tom-4.mp3").play();
        break;

        case "5": 
        new Audio("sounds/snare.mp3").play();
        break;

        case "6": 
        new Audio("sounds/crash.mp3").play();
        break;

        case "7": 
        new Audio("sounds/kick-bass.mp3").play();
        break;

        default:
            console.log(key)
            
    }
}