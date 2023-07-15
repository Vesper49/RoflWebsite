var text = document.querySelector('h2');
text.textContent = 'А че, ниче?';
document.querySelector('h2').onclick = function() {
    alert('ahhaahahahahahahahah');
}
var image = document.querySelector('img');
image.onclick = function(){
    var Src = image.getAttribute('src');
    if(Src === 'images/1c18c6d2e5c8a4805d15374421f2f789.png'){
        image.setAttribute('src', 'images/kirayo.jpg');
    }
    else{
        image.setAttribute('src', 'images/1c18c6d2e5c8a4805d15374421f2f789.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUsername(){
    var myName = prompt('Введи имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Классный заголовок, ' + myName;
}
if(!localStorage.getItem('name')){
    setUsername();
}
else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Классный заголовок, ' + storedName;
}
myButton.onclick = function(){
    setUsername();
}