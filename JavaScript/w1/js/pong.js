var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)
var timer = setInterval(main, 1000/60)

var fy = .85

var p1 = new Box();
p1.w = 20
p1.h = 150
p1.x = 0 + p1.w/2

var ball = new Box()
ball.w= 20
ball.h = 20
ball.vx = -5
ball.vy= -3
ball.color = `black`

function main()
{
    ctx.clearRect(0,0,c.width,c.height)

    if(keys[`w`])
    {
        p1.vy += -p1.force
    }

    if(keys[`s`])
    {
        p1.vy += p1.force
    }

    p1.vy *= fy
    p1.move()

    ball.move()

    if(p1.y < 0+p1.h/2)
    {
        p1.y = 0+p1.h/2
    }
    if(p1.y > c.height-p1.h/2)
    {
        p1.y = c.height-p1.h/2
    }

    if(ball.collide(p1))
    {
        ball.x = p1.x + p1.w/2 + ball.w/2
        ball.vx = -ball.vx;
    }

    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y = c.height/2
    }
    if(ball.x > c.width)
    {
        ball.x = c.width
        ball.vx = -ball.vx
    }
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.width)
    {
        ball.y = c.width
        ball.vy = -ball.vy
    }
    p1.draw()
    ball.draw()
}