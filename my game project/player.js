class Player {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = createSprite(x,y,width,height);
        this.sprite.scale = 0.5;
    }
    display() {
        this.sprite.shapecolor = "red"
        if(keyDown(LEFT_ARROW)) {
            this.sprite.x = this.sprite.x-1;
        }
        if(keyDown(RIGHT_ARROW)) {
            this.sprite.x = this.sprite.x+1;
        }
        if(keyDown(UP_ARROW)) {
            this.sprite.y = this.sprite.y-1;
        }
        if(keyDown(DOWN_ARROW)) {
            this.sprite.y = this.sprite.y+1;
        }
    }
}