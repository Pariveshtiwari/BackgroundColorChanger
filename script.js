const body = document.body;


const button = document.querySelector('.btn');

button.addEventListener('click',changeBgColor); //here instead of using the changeBgColor() fn. , we are passing it as a callback fn. so it gets only called when the event is triggered.
// if we passed it as a function like this changeBgColor() then it will get called as soon as the script is loaded.
function changeBgColor(){

    const randomColor = getRandomColor(); 
    body.style.backgroundColor = randomColor;
}

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';

    for(let i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)]; //here multiplied with 16 because there are 16 possible characters in the string
    }
    return color;
}