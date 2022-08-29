export const colorCode = (color) => {
    return COLORS.indexOf(color)
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

console.log(colorCode('red'));
console.log(colorCode('white'));