export { referenceDOM }

function referenceDOM(domNodes, domElements) {
    const main = document.querySelector('main');
    for (let key in domElements) {
        domNodes[key]['node'] = main.querySelector(`.${key}-container`);

        if (domNodes[key]['children']) {
            for (let el of domElements[key]) {
                domNodes[key]['children'][el['name']] = domNodes[key]['node'].querySelector(`.${el['class']}`);
            }
        }
    }
}
