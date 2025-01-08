export { domInit }
import { handlers } from "./handlers";

function domInit() {
    // Search event listener
    const searchForm = document.querySelector('.search-form');
    
    searchForm.addEventListener('submit', handlers.searchWeather);
}