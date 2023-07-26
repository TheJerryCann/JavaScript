var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

var timer = setInterval(main, 1000/60)

var p=[]
var amt = 1000

for(let i=0; i<amt; i++)
{
    p[i]=new Box();
    p[i].x = Math.random()*c.width;
    p[i].y = Math.random()*c.height;
    p[i].w = rand(7,8)
    p[i].h = p[i].w
    p[i].vy = p[i].w *.2;
    p[i].color = "snow"
}

function rand(l, h)
{
    return Math.random() * (h-1) + 1
}

function main()
{
    ctx.clearRect(0,0,c.width,c.height)
    for(let i=0; i<p.length; i++)
    {
        p[i].move()

        if(p[i].y > c.height +p[i].h)
        {
            p[i].y = -p[i].h
            //p[i].x = Math.random
        }
        p[i].draw()
    }
}