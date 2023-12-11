window.onload = function() {
    var navItems = document.querySelectorAll("nav ul li");
    var contentDivs = document.querySelectorAll("main div");

    navItems.forEach(function(navItem) {
        navItem.onclick = function() {
            var id = this.id;
            contentDivs.forEach(function(div) {
                if (div.id === id + "_content") {
                    div.style.display = "block";
                } else {
                    div.style.display = "none";
                }
            })
        }
    })
}