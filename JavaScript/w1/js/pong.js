var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)
var timer = setInterval(main, 1000/60)

var fy = .85

var player = [new Player(), new Player()]
player[0].pad = new Box();
player[1].pad = new Box();

console.log(player)
//hi

var p1 = new Box();
p1.w = 20
p1.h = 150
p1.x = 0 + p1.w/2
p1.pad 

var p2 = new Box()
p2.w = 20
p2.h = 150
p2.x = c.width-p2.w/2
p2.color = `blue`

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
        p1.vy += -p1.force
    }

    if(keys["ArrowUp"])
    {
        p2.vy += -p2.force
    }

    if(keys["ArrowDown"])
    {
        p2.vy += p2.force
    }

    if(keys[`s`])
    {
        p1.vy += p1.force
    }

    p1.vy *= fy
    p2.vy *= fy
    p1.move()
    p2.move()

    ball.move()

    if(p1.y < 0+p1.h/2)
    {
        p1.y = 0+p1.h/2
    }
    if(p1.y > c.height-p1.h/2)
    {
        p1.y = c.height-p1.h/2
    }

    if(p2.y < 0+p2.h/2)
    {
        p2.y = 0+p2.h/2
    }
    if(p2.y > c.height-p2.h/2)
    {
        p2.y = c.height-p2.h/2
    }

    if(ball.collide(p1))
    {
        ball.x = p1.x + p1.w/2 + ball.w/2
        ball.vx = -ball.vx;
    }
    if(ball.collide(p2))
    {
        ball.x = p2.x - p2.w/2 - ball.w/2
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
    p1.draw()
    p2.draw()
    ball.draw()
}