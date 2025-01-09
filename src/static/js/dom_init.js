export { domInit }
import { handlers } from "./handlers";

function domInit() {
    // Search event listener
    const searchForm = document.querySelector('.search-form');
    document.querySelector('#search').value = 'caracas';

    
    searchForm.addEventListener('submit', handlers.searchWeather);
}