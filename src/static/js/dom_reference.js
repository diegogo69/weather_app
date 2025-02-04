export { referenceDOM }

function referenceDOM(domNodes, domElements) {
    const main = document.querySelector('main');
    for (let key in domElements) {
        domNodes[key]['node'] = main.querySelector(`.${key}-container`);

        switch (key) {
            case 'days':
                    domNodes[key]['children'] = domNodes[key]['node'].querySelectorAll('.week-day');
                break;
            default:
                for (let el of domElements[key]) {
                    domNodes[key]['children'][el['name']] = domNodes[key]['node'].querySelector(`.${el['class']}`);
                }
                break;
        }
    }
}
