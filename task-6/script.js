const list = document.querySelector(".draggable-list");
let draggedIndex = null;

document.querySelectorAll(".draggable-list li").forEach((item, index) => {
  item.draggable = true;

  item.addEventListener("dragstart", () => {
    draggedIndex = index; // Store the dragged element index
    item.classList.add("dragging");
  });

  item.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  item.addEventListener("drop", (e) => {
    e.preventDefault();
    const droppedIndex = [...list.children].indexOf(e.target);

    if (
      draggedIndex !== null &&
      droppedIndex !== -1 &&
      draggedIndex !== droppedIndex
    ) {
      swapElements(draggedIndex, droppedIndex);
    }

    document
      .querySelectorAll("li")
      .forEach((li) => li.classList.remove("dragging"));
  });

  item.addEventListener("dragend", () => {
    draggedIndex = null;
  });
});

// Function to swap elements in the list
function swapElements(fromIndex, toIndex) {
  const items = [...list.children];
  list.insertBefore(items[fromIndex], items[toIndex].nextSibling);
}
