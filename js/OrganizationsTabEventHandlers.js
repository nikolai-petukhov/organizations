const addOrganizationButton = document.getElementById('button-add-organization');
const deleteOrganizationButton = document.getElementById('button-delete-organization');
const saveOrganizationButton = document.getElementById('button-save-organization');
const typeOfOrganizationInput = document.getElementById('type-organization');
const managerOrganizationInput = document.getElementById('manager');

function initOrganizationsTabEventHandlers() {

    addOrganizationButton.addEventListener('click', () => {
        console.log('add pressed');
    });

    deleteOrganizationButton.addEventListener('click', () => {
        console.log('delete pressed');
    });

    saveOrganizationButton.addEventListener('click', () => {
        console.log('save pressed');
    });

    typeOfOrganizationInput.addEventListener('click', () => {
        console.log('type pressed');
    });

    managerOrganizationInput.addEventListener('click', () => {
        console.log('manager pressed');
    });
    
}

export { initOrganizationsTabEventHandlers };


