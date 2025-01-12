// Toggle dropdown
export { initSearchForm }

import { dialogNode } from "./dialog";
import { handlers } from "./handlers";

const searchForm = document.querySelector('.search-form');

const unitgroupSet = searchForm.querySelector('.unitgroup');
unitgroupSet.addEventListener('click', handlers.unitgroup);

function initSearchForm() {
        // Search event listener
        searchForm.addEventListener('submit', handlers.searchWeather);

        initDropdown();
}

function initDropdown() {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    dropdownBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleDropdown();
    });

    const dropdownMenu = document.querySelector(".dropdown-menu");

    // In case many dropdowns opened, clode them all
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    // When click anywhere on the document close dropdown
    document.addEventListener("click", function () {
        dropdownMenus.forEach(function (dropdownMenu) {
            if (dropdownMenu.classList.contains("show")) {
                // toggleDropdown();
                dropdownMenu.classList.toggle("show");
            }
            
            // ADD CLOSE DIALOG ON CLICK ANYWHWERE IN PAGE
            dialogNode.close();
        });
    });
    
    function toggleDropdown() {
        dropdownMenu.classList.toggle("show");
    };
}
