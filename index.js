
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function Getexcuse(){

    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework' , 'the keys' , 'the car'];
    let when = ['before the class' , 'right on time' , 'when I finished' , 'during my lunch' , 'while I was praying'];

   
    return who[randomInteger(0, 3)]+ ' ' + action[randomInteger(0, 3)]+ ' ' + what[randomInteger(0, 2)]+ ' ' + when[randomInteger(0, 4)]


}





document.querySelector('p').innerHTML = Getexcuse()