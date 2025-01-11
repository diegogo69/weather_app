export { domInit }

import { domElements } from "./dom_elements";
import { referenceDOM } from "./dom_reference";
import { domNodes } from "./dom_nodes";
import { createMainElements } from "./create_main";
import { initSearchForm } from "./dropdown_handler";


function domInit() {
    initSearchForm()
    // Create dom elements of main
    createMainElements(domElements);
    referenceDOM(domNodes, domElements);
}
