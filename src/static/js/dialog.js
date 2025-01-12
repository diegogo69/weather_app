export { dialogNode }

const dialogNode = document.querySelector("dialog");
const closeButton = dialogNode.querySelector("button");

// dialogNode.showModal();

// "Close" button closes the dialogNode
closeButton.addEventListener("click", () => {
    dialogNode.close();
});