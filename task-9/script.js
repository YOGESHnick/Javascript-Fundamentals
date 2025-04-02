const contentContainer = document.getElementById("content-container");
const loadingText = document.getElementById("loading-text");
let isLoading = false;
let itemCount = 1; // To track the number of items added

// Function to create new content
function createContentItem() {
  const item = document.createElement("div");
  item.classList.add("content-item");
  item.innerHTML = `<p>Content Item ${itemCount}</p>`;
  itemCount++;
  return item;
}

// Function to load content dynamically
function loadMoreContent() {
  if (isLoading) return;
  isLoading = true;

  // Show loading text
  loadingText.style.display = "block";

  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      contentContainer.appendChild(createContentItem());
    }
    isLoading = false;
    loadingText.style.display = "none";
  }, 1000); // Simulating network delay
}

// Scroll event listener
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 10) {
    loadMoreContent();
  }
});

// Load initial content
for (let i = 0; i < 10; i++) {
  contentContainer.appendChild(createContentItem());
}
