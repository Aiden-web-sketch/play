class Pokemon{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0.4,
            friction:0.5,
			density:1.2
        }
        this.rect1=Bodies.rectangle(displayWidth-400,displayHeight-50,300,20,options)
        World.add(world,this.rect1)
        this.rect2=Bodies.rectangle(displayWidth-550,displayHeight-120,20,150,options)
        World.add(world,this.rect2)
        this.rect3=Bodies.rectangle(displayWidth-250,displayHeight-120,20,150,options)
        World.add(world,this.rect3)
        //this.body=Bodies.circle(x,y,radius,options)
       // World.add(world,this.body)

        this.radius=radius
        this.pokemon=loadImage("images/butterfree.png","images/venusaur.png","images/Shadow.webp","images/beedrill.png","images/blastoise.png","images/charizard.png","images/charmander.png","images/ivysaur.png","images/Mew.png","images/mewtwo.png,images/nidoking.png,images/pikachu.png,images/raichu-alolan.png,images/raticate-alolan.png","images/ratta-alolan.png")

    }
    display(){
        //var pos=this.body.position
        noStroke()
        rectMode(CENTER);
        fill("black")
      if(this.frameCount %80 ===0){
        pokemon.push(new Pokemon (j,random(displayWidth-400,displayHeight/1.2,300)));
        j.display()
      }
        //rect(displayWidth-400,displayHeight-50,300,20)
        //rect(displayWidth-550,displayHeight-120,20,150)  
        //rect(displayWidth-250,displayHeight-120,20,150)  
        push()
        //translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.pokemon,displayWidth-380,displayHeight-150,400,400)
        pop()
    }
}