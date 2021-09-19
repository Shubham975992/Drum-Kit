
function handleClick(){
    // alert("I am clicked");
    var k = this.innerHTML;
    console.log(k);
    makeSound(k);

}

for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
      
}

 addEventListener("keypress",function(event) {
     console.log(event.key);
     makeSound(event.key);    
});

function makeSound(key){
    switch (key) {
        case "w": console.log(key);
             var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
        case "a": var audio = new Audio("sounds/tom-2.mp3");
                    audio.play();
                    break;
        case "s": var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
        case "d": var audio = new Audio("sounds/tom-4.mp3");
                    audio.play();
                    break; 
        case "j": var audio = new Audio("sounds/snare.mp3");
                    audio.play();
                    break; 
        case "k": var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                    break; 
        case "l": var audio = new Audio("sounds/crash.mp3");
                    audio.play();    
            break;

            default:

    }
}