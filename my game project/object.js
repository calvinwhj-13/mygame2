class Object1 {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = createSprite(x,y,width,height);
        this.sprite.scale = 0.050;
    }
    display() {
        this.sprite.shapecolor = "yellow"
    }
}