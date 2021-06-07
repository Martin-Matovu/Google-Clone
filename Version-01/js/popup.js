// Get the required elements
var popupElement = document.getElementById("popup");

// Add an event listener
popupElement.addEventListener("click", expandPopup);

function expandPopup() {
    const showPopup = popupElement.parentElement;
    showPopup.style.overflow = "visible";
    showPopup.transition = "overflow 0.5s";
    //console.log("Content is now visible!");
    popupElement.removeEventListener("click", expandPopup);
    popupElement.addEventListener("click", collapsePopup);
}

// Collapse the element
function collapsePopup() {
    const hidePopup = popupElement.parentElement;
    //console.log("Content was visible,");
    hidePopup.style.overflow = "hidden";
    hidePopup.transition = "overflow 0.5s";
    //console.log("Now its hidden again!");
    popupElement.addEventListener("click", expandPopup);
}