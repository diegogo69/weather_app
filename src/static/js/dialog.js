export { dialogNode }

const dialogNode = document.querySelector("dialog");
const closeButton = dialogNode.querySelector("button");

// dialogNode.showModal();
dialogNode.addEventListener("click", function(e) {
    e.stopPropagation();
})
// "Close" button closes the dialogNode
closeButton.addEventListener("click", () => {
    dialogNode.close();
});