/**
 * Created by Tim on 02/12/15.
 */

function init() {
    var stage = new createjs.SpriteStage("canvasElementId", false, false);
    stage.updateViewport(800, 600);
    var image = new createjs.Bitmap("/../img/survival_figure.png");
    stage.addChild(image);
    createjs.Ticker.addEventListener("tick", handleTick);

    function handleTick(event) {
        image.x += 10;
        stage.update();
    }
}

function handleClick(event){
    event.target.x += 5;
    event.target.y += 5;
    stage.update();
}