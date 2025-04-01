const thumbnails = document.querySelectorAll(".thumbnail");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Open lightbox when a thumbnail is clicked
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    lightbox.style.display = "flex";
    lightboxImg.src = this.src; // Update modal image
  });
});

// Close lightbox when clicking the close button or outside the image
closeBtn.addEventListener("click", () => (lightbox.style.display = "none"));

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none"; // Close when clicking outside image
  }
});
