// Define the available routes and their content
const routes = {
  home: "<h2>Home Page</h2><p>Welcome to our Single-Page Application!</p>",
  about:
    "<h2>About Page</h2><p>This is a simple SPA using hash-based routing.</p>",
  contact:
    "<h2>Contact Page</h2><p>Get in touch with us at contact@example.com.</p>",
};

// Function to load content based on hash
function loadContent() {
  const hash = window.location.hash.substring(1) || "home"; // Default to 'home' if empty
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML =
    routes[hash] || "<h2>404 Not Found</h2><p>Page not found.</p>";
}

// Listen for hash changes and update content
window.addEventListener("hashchange", loadContent);
window.addEventListener("load", loadContent);
