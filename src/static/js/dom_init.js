export { domInit }

import { handlers } from "./handlers";
import { domElements } from "./dom_elements";
import { referenceDOM } from "./dom_reference";
import { domNodes } from "./dom_nodes";
import { createMainElements } from "./create_main";


function domInit() {
    // Search event listener
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', handlers.searchWeather);
    // test value
    document.querySelector('#search').value = 'caracas';
    // Create dom elements of main
    createMainElements(domElements);
    referenceDOM(domNodes, domElements);
}
