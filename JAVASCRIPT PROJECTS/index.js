console.log('JS.Loaded');

var countdownElement = document.getElementById('countdown');
var bgImageElement = document.getElementById('bg-image');

var initialCountdownVal= countdownElement.innerHTML;

setInterval(function(){
    initialCountdownVal = initialCountdownVal>0? initialCountdownVal-1: 0;
    countdownElement.innerHTML=initialCountdownVal;
    var backImgPath = initialCountdownVal % 2 ==0 ?
     '/assets/2016-03-21-13-01-37.jpg' : '/assets/2016-01-10-11-25-31.jpg'

     bgImageElement.src= backImgPath;
    
}, 1000);