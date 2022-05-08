const organizationsListItems = document.querySelectorAll('.organizations-list-item');
const organizationsListContainer = document.querySelector('.organizations-list-container');

function organizationsListOverflowInit() {
    if (organizationsListItems.length > 13)
        organizationsListContainer.style.overflowY = 'scroll';
    else
    organizationsListContainer.style.overflowY = 'hidden';
}

function organizationListItemsOnClick() {
    organizationsListItems.forEach(organizationListItem => {
        organizationListItem.addEventListener('click', () => {
            organizationsListItems.forEach(item => {
                item.classList.remove('organizations-list-item-selected');
            });
            organizationListItem.classList.add('organizations-list-item-selected');
        })
    });
}

export { organizationListItemsOnClick, organizationsListOverflowInit };