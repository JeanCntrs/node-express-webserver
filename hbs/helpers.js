const hbs = require('hbs')

hbs.registerHelper('getYear', () => { // Los helpers son funciones que se disparan cuando el template lo requiere
    return new Date().getFullYear();
})

hbs.registerHelper('capitalize', (text) => {
    let words = text.split(' ');
    words.forEach((element, index) => {
        words[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
    return words.join(' ');
})