var logoTop2 = document.querySelector('.logotop2');
var logoTop = document.querySelector('.logotop');
var audioFlVictory = document.querySelector('.victory');
var audioSco = document.querySelector('.scorp')
var audioToasty = document.querySelector('.toastyMp3');
var buttonToasty = document.querySelector('.bottomToasty');
var toastyImg = document.querySelector('.toastyImg');{
    toastyImg.hidden = true;
var slaid = document.querySelector('.slaid');{
    slaid.hidden = true;
    }
}
let click = 0;

function toasty(){
    toastyImg.hidden = false;
    audioToasty.play();
    setTimeout(() => {
        toastyImg.hidden = true;
    }, 1000);
        
}

buttonToasty.onclick = function(){
click++;
if (click<=5){
    toasty();
}
    if (click==5){
        audioSco.play();
        sco() ;
    }
}

function sco(){
    slaid.hidden = false;
    setTimeout(() => {
        slaid.hidden = true;
    }, 600);
    


document.querySelector('.slaid').animate([
    { transform: 'translate3D(1500px, 0, 0)' }
  ], {
    duration: 700,

  })
}

document.querySelector('.logotop').animate([
    { transform: 'translate3D(-1000px, 0, 1000px)' }
  ], {
    duration: 10000,
    iterations: Infinity
  })


  //test string


 


