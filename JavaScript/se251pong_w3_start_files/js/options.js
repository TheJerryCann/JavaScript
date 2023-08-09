/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
var options = document.querySelectorAll(`#options h2`)
options[0].addEventListener(`click`, showhide)

function showhide()
{
    var sides = document.querySelector(`.sides`)
    sides.classList.toggle(`hidden`)
}

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
var fill = document.querySelectorAll(`.fill`)
for(let i = 0; i<fill.length; i++)
{
    fill[i].value = player[i].fill
    fill[i].nextElementSibling.innerHTML = player[i].fill
    fill[i].addEventListener(`input`, colorfill)
    function colorfill(e)
    {
        console.dir(e.target.value)
        player[i].fill = e.target.value
        player[i].pad.fill = e.target.value
        e.target.nextElementSibling.innerHTML = player[i].fill
        console.log(fill[i])
    }
    
}
var stroke = document.querySelectorAll(`.stroke`)
for(let i = 0; i<stroke.length; i++)
{
    stroke[i].value = player[i].stroke
    stroke[i].nextElementSibling.innerHTML = player[i].stroke
    stroke[i].addEventListener(`input`, colorfill)
    function colorfill(e)
    {
        console.dir(e.target.value)
        player[i].stroke = e.target.value
        player[i].pad.stroke = e.target.value
        e.target.nextElementSibling.innerHTML = player[i].stroke
        console.log(stroke[i])
    }
    
}

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
var u = document.querySelectorAll(`.u`)
for(let i = 0; i<u.length; i++)
{
    u[i].value = player[i].keys
    u[i].addEventListener(`keydown`, (e)=>{
        u[i].value = e.key
        player[i].keys.u = e.target.value
        u[i].nextElementSibling.innerHTML = e.target.value
    })
    u[i].addEventListener(`focus`, (e)=>{
        currentState = `pause`
    })
}
var d = document.querySelectorAll(`.d`)
for(let i = 0; i<d.length; i++)
{
    d[i].value = player[i].keys
    d[i].addEventListener(`keydown`, (e)=>{
        d[i].value = e.key
        player[i].keys.d = e.target.value
        d[i].nextElementSibling.innerHTML = e.target.value
    })
    d[i].addEventListener(`focus`, (e)=>{
        currentState = `pause`
    })
}
var s = document.querySelectorAll(`.s`)
for(let i = 0; i<s.length; i++)
{
    s[i].value = player[i].keys
    s[i].addEventListener(`keydown`, (e)=>{
        s[i].value = e.key
        player[i].keys.s = e.target.value
        s[i].nextElementSibling.innerHTML = e.target.value
    })
    s[i].addEventListener(`focus`, (e)=>{
        currentState = `pause`
    })
}