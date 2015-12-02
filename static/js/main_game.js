/**
 * Created by Tim on 02/12/15.
 */

function init() {
    var stage = new createjs.Stage("demoCanvas");

    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    circle.addEventListener("click", handleClick);
    stage.addChild(circle);
    stage.update();
    createjs.Ticker.addEventListener("tick", handleTick);
    function handleTick(event) {
        circle.x += 1;
        stage.update();
    }
}

function handleClick(event){
    event.target.x += 5;
    event.target.y += 5;
    stage.update();
}