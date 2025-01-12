// Toggle dropdown
export { initSearchForm }

import { handlers } from "./handlers";

const searchForm = document.querySelector('.search-form');

const unitgroupSet = searchForm.querySelector('.unitgroup');
unitgroupSet.addEventListener('click', handlers.unitgroup);

const langSet = searchForm.querySelector('.lang');
langSet.addEventListener('click', handlers.lang);


function initSearchForm() {
        // Search event listener
        searchForm.addEventListener('submit', handlers.searchWeather);
        searchForm.querySelector('#search').value = 'caracas';

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
        });
    });
    
    function toggleDropdown() {
        dropdownMenu.classList.toggle("show");
    };
}
