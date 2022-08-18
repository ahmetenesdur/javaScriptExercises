function timeToMixJuice(name) {
    switch (name) {
        case 'Pure Strawberry Joy':
            return 0.5
            break;

        case 'Energizer':
        case 'Green Garden':
            return 1.5
            break;

        case 'Tropical Island':
            return 3
            break;

        case 'All or Nothing':
            return 5
            break;

        default:
            return 2.5
    }
}
console.log(timeToMixJuice('Tropical Island'));
// => 3
console.log(timeToMixJuice('Berries & Lime'));
// => 2.5

const limeSize = {
    small: 6,
    medium: 8,
    large: 10
}

function limesToCut(wedgesNeeded, limes) {
    let cut = 0;

    while (wedgesNeeded > 0 && limes.length > 0) {
        cut++;
        wedgesNeeded -= limeSize[limes.shift()]
    }
    return cut
}
console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']));
// => 4

function remainingOrders(timeLeft, orders) {
    do {
        timeLeft -= timeToMixJuice(orders.shift());
    } while (orders.length >= 0 && timeLeft > 0);
    return orders
}

console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']));
// => ['Green Garden']