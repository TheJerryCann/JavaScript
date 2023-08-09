var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)
var timer = setInterval(main, 1000/60)

var fy = .85

var player = [new Player(), new Player()]
player[0].pad = new Box();
player[1].pad = new Box();

var pad = [player[0].pad, player[1].pad]

console.log(player)

pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2

pad[1].w = 20
pad[1].h = 150
pad[1].x = c.width-pad[1].w/2
pad[1].color = `blue`
pad[1].dir = -1

var ball = new Box()
ball.w= 20
ball.h = 20
ball.vx = -7
ball.vy= -4
ball.color = `black`


function main()
{
    ctx.clearRect(0,0,c.width,c.height)

    if(keys[`w`])
    {
        pad[0].vy += -pad[0].force
    }

    if(keys["ArrowUp"])
    {
        pad[1].vy += -pad[1].force
    }

    if(keys["ArrowDown"])
    {
        pad[1].vy += pad[1].force
    }

    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }

    ball.move()

    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y = c.height/2
        player[1].score += 1
    }
    if(ball.x > c.width)
    {
        ball.x = c.width/2
        ball.y = c.height/2
        player[0].score += 1
    }
    if(ball.y < 0)
    {
        ball.y = 0 + ball.h/2
        ball.vy = -ball.vy
    }
    if(ball.y > c.width)
    {
        ball.y = c.width - ball.h/2
        ball.vy = -ball.vy
    }
    console.log(`${player[0].score} | ${player[1].score}`)
    var score = document.querySelectorAll(`#score div`)
    ball.draw()
    for(i = 0; i<score.length; i++)
    {
        pad[i].vy *= fy
        pad[i].move()

        if(pad[i].y < 0+pad[i].h/2)
        {
            pad[i].y = 0+pad[i].h/2
        }
        if(pad[i].y > c.height-pad[i].h/2)
        {
            pad[i].y = c.height-pad[i].h/2
        }

        if(ball.collide(pad[i]))
        {
            ball.x = pad[i].x + (pad[i].w/2 + ball.w/2)*pad[i].dir
            ball.vx = -ball.vx;
        }

        pad[i].draw()

        score[i].innerHTML = player[i].score
    }
}