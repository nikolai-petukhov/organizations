import * as tabs from './js/navTabsScript.js';
import * as organizationListItems from './js/organizaionListScript.js';
import {initOrganizationsTabEventHandlers} from './js/OrganizationsTabEventHandlers.js';

tabs.initTabs();
tabs.navTabsFunctionality();
organizationListItems.organizationsListOverflowInit();
organizationListItems.organizationListItemsOnClick();
initOrganizationsTabEventHandlers();