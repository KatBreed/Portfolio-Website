//Show and Hide Content
window.onload = function() {
    // Get references to the navigation items and content divs
    const purposeNavItem = document.getElementById('purpose');
    const purposeContent = document.getElementById('purpose_content');
    const courseProjectNavItem = document.getElementById('course_project');
    const courseProjectContent = document.getElementById('course_project_content');
    const homeProjectsNavItem = document.getElementById('home_projects');
    const homeProjectsContent = document.getElementById('home_projects_content')

    // Add click event listeners to the navigation items
    purposeNavItem.addEventListener('click', function () {
        // Show the purpose content and hide the course project content
        purposeContent.style.display = 'block';
        courseProjectContent.style.display = 'none';
        homeProjectsContent.style.display = 'none';
    });

    courseProjectNavItem.addEventListener('click', function () {
        // Show the course project content and hide the purpose content
        purposeContent.style.display = 'none';
        courseProjectContent.style.display = 'block';
        homeProjectsContent.style.display = 'none';
    });

    homeProjectsNavItem.addEventListener('click', function () {
        // Show home projects content and hide other content
        purposeContent.style.display = 'none';
        courseProjectContent.style.display = 'none';
        homeProjectsContent.style.display = 'block';
    });
};



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