function showPopup(element) {
    const popup = element.querySelector('.popup');
    if (popup) {
        popup.style.display = 'block'; // Only show the popup within this specific list item
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)'; // Center the popup
    }
}

function hidePopup(element) {
    const popup = element.querySelector('.popup');
    if (popup) {
        popup.style.display = 'none'; // Only hide the popup within this specific list item
    }
}