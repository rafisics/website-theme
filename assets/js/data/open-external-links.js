// It enables opening external links in new tabs so that I don't need to set {:target="_blank"} every time
document.addEventListener("DOMContentLoaded", function () {
    // Cache hostname to avoid repeated calls
    const hostname = window.location.hostname;
    
    // Select external links (http or https) not containing current hostname
    const links = document.querySelectorAll('a[href^="http"]:not([href*="' + hostname + '"])');
    
    // Add target="_blank" and rel="noopener noreferrer" to external links
    links.forEach(link => {
        // Skip if target attribute already exists
        if (!link.target) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }
    });
});
