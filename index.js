//get element
 var button = document.querySelectorAll(".drum").length;
//looping and playing sound
for (let i = 0; i < button; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerhtml = this.innerHTML;

        makesound(buttonInnerhtml);

        buttonAnimation(buttonInnerhtml);
     
    })
    
}
//for click
 document.addEventListener("keypress", function (event) {

     makesound(event.key);

     buttonAnimation(event.key);
 })
 // for keyboard
 function makesound(key){
   //condition
   switch (key) {
    case "w":
       var tom1 = new Audio("tom-1.mp3");
       tom1.play();
        break;
    case "a": 
      var tom2 = new Audio("tom-2.mp3");
       tom2.play();
       break;
       case "s":
        var tom3 = new Audio("tom-3.mp3");
       tom3.play();
       break;
       case "d":
        var tom4 = new Audio("tom-4.mp3");
       tom4.play();
       break;
        case "j":
        var snare = new Audio("snare.mp3");
       snare.play();
       break;
        case "k":
        var crash = new Audio("crash.mp3");
       crash.play();
       break;
       case "l":
        var kick = new Audio("kick-bass.mp3");
       kick.play()
       break;


    default: console.log( buttonInnerhtml);

}
 }
//animation
 function buttonAnimation(currentkey){

  var activeKey =  document.querySelector("." + currentkey);

  activeKey.classList.add("pressed");

  setTimeout( function(){
      activeKey.classList.remove("pressed");
  }, 100)

 }