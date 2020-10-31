// This class is not used in the project yet. // The constructor has three parameters. Here is an example of how you would create
// an instance of this class// We create a DOM element, set its CSS attributes then append it to the parent DOM element. We also
// set the \`domElement\` property of the instance to the newly created DOM element so we can update it later // This method is used to update the text displayed in the DOM element

class Text {
    constructor(root, xPos, yPos) {
        const divText = document.createElement("div");
        divText.id = "divID";
        divText.style.position = "absolute";
        divText.style.left = xPos;
        divText.style.top = yPos;
        divText.style.color = "black";
        divText.style.font = "bold 35px Frutiger";
        divText.style.zIndex = 10;
        root.appendChild(divText);
        this.domElement = divText;
    }

    update(text) {
        this.domElement.innerText = text;
    }
}