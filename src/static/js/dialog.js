export { dialogNode }

const dialogNode = document.querySelector("dialog");
const closeButton = dialogNode.querySelector("button");

// Avoid clash with document click handler
dialogNode.addEventListener("click", function(e) {
    e.stopPropagation();
})
// "Close" button closes the dialogNode
closeButton.addEventListener("click", () => {
    dialogNode.close();
});