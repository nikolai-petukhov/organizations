const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tabs-content');

function initTabs() {
    for (let tab of tabs) {
        if(tab.classList.contains('active-tab')) {
            tabsContent.forEach(tabContent => {
                if(tab.dataset.tabId !== tabContent.id)
                    tabContent.style.display = 'none';
            });
        }
    }
}

function setActiveContent(tab) {
    tabsContent.forEach(tabContent => {
        if (tabContent.id === tab.dataset.tabId) {
            tabContent.style.display = 'grid';
        } else {
            tabContent.style.display = 'none';
        }
    });
}

function navTabsFunctionality() {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if(!tab.classList.contains('active-tab')) {
                tabs.forEach(tab => {
                    tab.classList.remove('active-tab');
                });
                tab.classList.add('active-tab');
                setActiveContent(tab);
            }
        })
    });
}

export { initTabs, navTabsFunctionality };