function togglePanel(index) {
    var accordions = document.getElementsByClassName("accordion");
    var panels = document.getElementsByClassName("panel");

    for (var i = 0; i < panels.length; i++) {
        if (i === index) {
            var panel = panels[i];
            var accordion = accordions[i];
            var isOpen = panel.classList.contains("active");

            // Collapse all panels
            for (var j = 0; j < panels.length; j++) {
                panels[j].style.height = "0px";
                panels[j].classList.remove("active");
                accordions[j].classList.remove("active");
            }

            // Expand clicked one
            if (!isOpen) {
                panel.classList.add("active");
                accordion.classList.add("active");
                var contentHeight = panel.scrollHeight + "px";
                panel.style.height = contentHeight;
            }
        }
    }
}

window.onscroll = function () {
    var nav = document.querySelector("nav");
    if (window.scrollY > 10) { // Adjust scroll trigger
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
};

function menuList() {
    document.querySelector('.menu-list').classList.toggle('show');
    document.querySelector('.menu-icon').classList.toggle('activeNavbar');
}