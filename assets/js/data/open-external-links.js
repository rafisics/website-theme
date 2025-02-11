// It enables opening external links in new tabs so that I don't need to set {:target="_blank"} every time

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
    links.forEach(link => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });
});
