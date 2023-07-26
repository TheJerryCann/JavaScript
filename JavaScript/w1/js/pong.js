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
pad[0].pad 

pad[1].w = 20
pad[1].h = 150
pad[1].x = c.width-pad[1].w/2
pad[1].color = `blue`

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

    pad[0].vy *= fy
    pad[1].vy *= fy
    pad[0].move()
    pad[1].move()

    ball.move()

    if(pad[0].y < 0+pad[0].h/2)
    {
        pad[0].y = 0+pad[0].h/2
    }
    if(pad[0].y > c.height-pad[0].h/2)
    {
        pad[0].y = c.height-pad[0].h/2
    }

    if(pad[1].y < 0+pad[1].h/2)
    {
        pad[1].y = 0+pad[1].h/2
    }
    if(pad[1].y > c.height-pad[1].h/2)
    {
        pad[1].y = c.height-pad[1].h/2
    }

    if(ball.collide(pad[0]))
    {
        ball.x = pad[0].x + pad[0].w/2 + ball.w/2
        ball.vx = -ball.vx;
    }
    if(ball.collide(pad[1]))
    {
        ball.x = pad[1].x - pad[1].w/2 - ball.w/2
        ball.vx = -ball.vx;
    }
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y = c.height/2
    }
    if(ball.x > c.width)
    {
        ball.x = c.width/2
        ball.y = c.height/2
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
    pad[0].draw()
    pad[1].draw()
    ball.draw()
}