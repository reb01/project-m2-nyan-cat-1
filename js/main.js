// We create an instance of the Engine class. Looking at our index.html,
// we see that it has a div with an id of `"app"`
const gameEngine = new Engine(document.getElementById("app"));

const app = document.getElementById("app");
let text = new Text(app, 150, 150);
text.update("I CAN HAZ TRUMP?!?? (2020)");

// keydownHandler is a variable that refers to a function. The function has one parameter
// (does the parameter name matter?) which is called event. As we will see below, this function
// will be called every time the user presses a key. The argument of the function call will be an object.
// The object will contain information about the key press, such as which key was pressed.
const keydownHandler = (event) => {
    // event.code contains a string. The string represents which key was press. If the
    // key is left, then we call the moveLeft method of gameEngine.player (where is this method defined?)
    if (event.code === "ArrowLeft") {
        gameEngine.player.moveLeft();
    }
    // If `event.code` is the string that represents a right arrow keypress,
    // then move our hamburger to the right
    if (event.code === "ArrowRight") {
        gameEngine.player.moveRight();
    }
    if (event.code === "ArrowUp") {
        gameEngine.player.moveUp();
    }
    if (event.code === "ArrowDown") {
        gameEngine.player.moveDown();
    }
};

// We add an event listener to document. document the ancestor of all DOM nodes in the DOM.
document.addEventListener("keydown", keydownHandler);

// We call the gameLoop method to start the game

const button = document.createElement("input");
button.setAttribute("type", "button");
button.setAttribute("value", "Click me to start the game");
button.style.backgroundColor = "#5c51fc";
button.style.color = "black";
button.style.padding = "30px";
button.style.fontSize = "30px";
button.style.position = "absolute";
button.style.top = "220px";
button.style.right = `190px`;
button.setAttribute("onclick", "showMessage();");
button.style.display = "inline-block";
app.append(button);

function showMessage() {
    gameEngine.gameLoop();
    button.style.display = "none";
}