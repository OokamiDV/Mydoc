let audioChooseUdest = document.querySelector('.choose');
var audioUNevWin = document.querySelector('.never');
var enterAge = document.querySelector('.enterAge');
var testAge = document.querySelector('.testAge');

    testAge.onclick = function(){
        
        let age = enterAge.value;
    
    if (age >=17){ audioChooseUdest.play(); (window.location.href = 'index.html');

    }else{ (window.location.href = 'index2.html');

    }
}

enterAge.onclick = function(){
    audioChooseUdest.play();
}



