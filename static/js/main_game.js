/**
 * Created by Tim on 02/12/15.
 */

function init() {
    // Set up SpriteStage
    var stage = new createjs.SpriteStage("game_canvas", false, false);
    stage.updateViewport(800, 600);
//    var image = new createjs.Bitmap("/../img/survival_figure.png");
//    stage.addChild(image);


    // SpriteSheet Data
    var data = {
        images: ["/../../static/img/sprite.png"],
        frames: {width: 56, height: 71},
        animations: {   stand: [17, 20],
            right_bump: {
                frames: [21, 27],
                next: "stand",
                speed: 2 }
        }
    };

    // SpriteSheet creation / adding sprites
    var spriteSheet = new createjs.SpriteSheet(data);
    var container = new createjs.SpriteContainer(spriteSheet);
    var spriteInstance = new createjs.Sprite(spriteSheet);
    spriteInstance.gotoAndPlay("right_bump");

    container.addChild(spriteInstance);
    container.x = 100;

    // Add SpriteContainer to SpriteStage
    stage.addChild(container);
    stage.update();

    // Game Tick
    createjs.Ticker.addEventListener("tick", handleTick);
    function handleTick(event) {
        stage.update();
    }
}

function handleClick(event){
    event.target.x += 5;
    event.target.y += 5;
    stage.update();
}