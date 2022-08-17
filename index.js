let drums = document.querySelectorAll(".drum").length

for (let i = 0; i < drums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML
    // this.innerHTML is reading inside between the button element
    makeSound(buttonInnerHtml)
    buttonAnimation(buttonInnerHtml)
  })
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key)
  buttonAnimation(event.key)
})

function makeSound(key) {

  switch (key) {
    // switchCase is more like if else statement. if pressed or clicked is the same with
    // the this.innerHTML then play()
    case "1":
      // let tom1 = new 
      new Audio("sounds/tom-1.mp3").play();
      // tom1.play();
      break;
    case "2":
      let tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play();
      break;

    case "3":
      let tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play();
      break;

    case "4":
      let tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play();
      break;

    case "5":
      let snare = new Audio("sounds/snare.mp3")
      snare.play();
      break;

    case "6":
      let crash = new Audio("sounds/crash.mp3")
      crash.play();
      break;

    case "7":
      let kickBase = new Audio("sounds/kick-bass.mp3")
      kickBase.play();
      break

    default:
      console.log(key)

  }

}


function buttonAnimation (currentKey){
let activeButton = document.querySelector(".w" + currentKey)
activeButton.classList.add("pressed")
setTimeout ( function(){
  activeButton.classList.remove("pressed")
}, 100)
// setTimeout (function() , time)
}
