class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY) {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options)
            World.add(world, this.rope)
    }
    display(){
        if(this.rope.bodyA){
        var PA = this.rope.bodyA.position
        var PB = this.rope.bodyB.position
        strokeWeight(2);

        var Anchor1X = PA.x
        var Anchor1Y = PA.y
        var Anchor2X = PB.x+this.offsetX
        var Anchor2Y = PB.y+this.offsetY
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        }
    }
}