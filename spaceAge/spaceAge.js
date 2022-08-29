export const age = (planet, seconds) => {
    const formula = (period) => Number((seconds / 31557600 / period).toFixed(2))
    switch (planet) {
        case 'earth':
            return formula(1)
            break;
        case 'mercury':
            return formula(0.2408467)
            break;
        case 'venus':
            return formula(0.61519726)
            break;
        case 'mars':
            return formula(1.8808158)
            break;
        case 'jupiter':
            return formula(11.862615)
            break;
        case 'saturn':
            return formula(29.447498)
            break;
        case 'uranus':
            return formula(84.016846)
            break;
        case 'neptune':
            return formula(164.79132)
            break;

        default:
            break;
    }
};

console.log(age('earth', 1000000000));
console.log(age('mercury', 1000000000));
