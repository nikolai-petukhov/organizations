function popupWindowShow(popupWindowId) {
    document.getElementById(popupWindowId).classList.remove('popup-hidden');
    
    popupWindowOnClose();
}

function popupWindowOnClose() {
    const popupBackgrounds = document.querySelectorAll('.popup');

    popupBackgrounds.forEach(popupBackground => {
        if (popupBackground !== null && !popupBackground.classList.contains('popup-hidden')) {
            popupBackground.addEventListener('click', () => {
                popupBackground.classList.add('popup-hidden');
            });
        }
    });
}

export { popupWindowShow };