var numOfDrumBtns = document.querySelectorAll(".drum").length;

for(var i = 0 ; i <numOfDrumBtns ; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click" , function(){

        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        animateBtn(buttonInnerHTML);

    });
}


document.addEventListener("keypress" , function(event){
    makesound(event.key);
        animateBtn(event.key);
});


function makesound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sound/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("sound/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("sound/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("sound/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var snare = new Audio("sound/snare.mp3");
            snare.play();
        break;
        case "k":
            var crash = new Audio("sound/crash.mp3");
            crash.play();
        break;
        case "l":
            var kick = new Audio("sound/kick-bass.mp3");
            kick.play();
        break;

        default:
            break;
    }

}

function animateBtn(curKey) {
        var activeBtn = document.querySelector("." + curKey);
        activeBtn.classList.add("pressed");

        setTimeout(function(){
                activeBtn.classList.remove("pressed");
        } , 100)
}
