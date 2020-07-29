class Enemy{
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = createSprite(x,y,width,height);
        this.sprite.scale = 0.5;
    }
    display() {
         this.sprite.shapecolor = "pink"
    }
    movement(a,b) {
        this.sprite.velocityX = random(a,b);
        this.sprite.velocityY = random(a,b);
    }
}