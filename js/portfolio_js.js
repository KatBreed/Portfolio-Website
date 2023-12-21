//Show and Hide Content
window.onload = function() {
    // Get references to the navigation items and content divs
    //Purpose
    const purposeNavItem = document.getElementById('purpose');
    const purposeContent = document.getElementById('purpose_content');
    //Course Project
    const courseProjectNavItem = document.getElementById('course_project');
    const courseProjectContent = document.getElementById('course_project_content');
    //Home Projects
    const homeProjectsNavItem = document.getElementById('home_projects');
    const homeProjectsContent = document.getElementById('home_projects_content')
    //About Me
    const aboutMeNavItem = document.getElementById('about_me');
    const aboutMeContent = document.getElementById('about_me_content');
    //Contact
    const contactNavItem = document.getElementById('contact');
    const contactContent = document.getElementById('contact_content')

    // Add click event listeners to the navigation items
    purposeNavItem.addEventListener('click', function () {
        // Show the purpose content and hide the other content
        purposeContent.style.display = 'block';
        courseProjectContent.style.display = 'none';
        homeProjectsContent.style.display = 'none';
        aboutMeContent.style.display = 'none';
        contactContent.style.display = 'none';
    });

    courseProjectNavItem.addEventListener('click', function () {
        // Show the course project content and hide the other content
        purposeContent.style.display = 'none';
        courseProjectContent.style.display = 'block';
        homeProjectsContent.style.display = 'none';
        aboutMeContent.style.display = 'none';
        contactContent.style.display = 'none';
    });

    homeProjectsNavItem.addEventListener('click', function () {
        // Show home projects content and hide other content
        purposeContent.style.display = 'none';
        courseProjectContent.style.display = 'none';
        homeProjectsContent.style.display = 'block';
        aboutMeContent.style.display = 'none';
        contactContent.style.display = 'none';
    });

    aboutMeNavItem.addEventListener('click', function() {
        //Show about me content and hide the other content
        purposeContent.style.display = 'none';
        courseProjectContent.style.display = 'none';
        homeProjectsContent.style.display = 'none';
        aboutMeContent.style.display = 'block';
        contactContent.style.display = 'none';
    });

    contactNavItem.addEventListener('click', function () {
        purposeContent.style.display = 'none';
        courseProjectContent.style.display = 'none';
        homeProjectsContent.style.display = 'none';
        aboutMeContent.style.display = 'none';
        contactContent.style.display = 'Block';
    })
}



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