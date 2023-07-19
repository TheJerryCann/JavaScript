
var keys = [];
document.addEventListener(`keydown`, (e)=>{
    keys[e.key]=true;
    console.log(String.fromCharCode(e.keyCode))
})

document.addEventListener(`keyup`, (e)=>{
    keys[e.key]=false;
})
