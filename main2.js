var hideImg = document.querySelector('.hideImg');
hideImg.hidden = true;
var showButton = document.querySelector('.showButton');
var haha = document.querySelector('.haha')

showButton.onclick = function(){
    hideImg.hidden = false;
    haha.play();
}


