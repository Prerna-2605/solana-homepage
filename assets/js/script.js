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