//Enlarge Image
function enlargeImage(img) {
    // Create an overlay element
    var overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "9999";
    
    // Create an image element within the overlay
    var enlargedImg = document.createElement("img");
    enlargedImg.src = img.src;
    enlargedImg.style.maxWidth = "90%";
    enlargedImg.style.maxHeight = "90%";
    enlargedImg.style.objectFit = "contain";

    // Append the image to the overlay
    overlay.appendChild(enlargedImg);
    
    // Append the overlay to the body
    document.body.appendChild(overlay);
    
    // Close the overlay when the close button is clicked
    overlay.addEventListener("click", function () {
        document.body.removeChild(overlay);
    });
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.backgroundColor = '#f0f0f0';
  });

  card.addEventListener('mouseout', () => {
    card.style.backgroundColor = '#fff';
  });
});