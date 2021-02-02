class Pokemonball{
    constructor(x,y,radius){
        var options={
            //isStatic: true,
            restitution:0.6,
			friction:0.1,
			density:0.2
        }
        this.body=Bodies.circle(x,y,radius/2,options)
        World.add(world,this.body)
        
        this.pokemonball=loadImage("images/ball.png")   

        this.radius=radius
    }
    display(){
        var pos=this.body.position
        console.log(pos.x,pos.y)
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.pokemonball,0,0,this.radius,this.radius)
        pop()
    }
}