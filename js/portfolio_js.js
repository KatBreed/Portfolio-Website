window.onload = function() {
    // Get references to the navigation items and content divs
    const purposeNavItem = document.getElementById('purpose');
    const courseProjectNavItem = document.getElementById('course_project');
    const purposeContent = document.getElementById('purpose_content');
    const courseProjectContent = document.getElementById('course_project_content');

    // Add click event listeners to the navigation items
    purposeNavItem.addEventListener('click', function () {
        // Show the purpose content and hide the course project content
        purposeContent.style.display = 'block';
        courseProjectContent.style.display = 'none';
    });

    courseProjectNavItem.addEventListener('click', function () {
        // Show the course project content and hide the purpose content
        purposeContent.style.display = 'none';
        courseProjectContent.style.display = 'block';
    });
};