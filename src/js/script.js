const nav = document.querySelector(".menu");

nav.ariaHidden = "false";

const toggle = document.querySelector(".menu-btn");

toggle.ariaExpanded = "true";

const body = document.body;

toggle.addEventListener("click", () => {
    
    const isOpen = toggle.ariaExpanded === "true";

    nav.ariaHidden = isOpen ? "true" : "false";
    toggle.ariaExpanded = isOpen ? "false" : "true";
    
   
});