export const COLORS = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
};

export const decodedValue = (color) => {
    return Number(`${COLORS[color[0]]}${COLORS[color[1]]}`)
};

console.log(decodedValue(['orange', 'red']));