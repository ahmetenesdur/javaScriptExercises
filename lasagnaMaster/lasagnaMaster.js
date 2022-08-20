export function cookingStatus(time) {
    return time > 0 ? 'Not done, please wait.' : time == 0 ? 'Lasagna is done.' : 'You forgot to set the timer.'
}

console.log(cookingStatus(12));
// => 'Not done, please wait.'

console.log(cookingStatus());
// => 'You forgot to set the timer.'

export function preparationTime(layers, time = 2) {
    return layers.length * time
}

const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];

console.log(preparationTime(layers, 3));
// => 18
console.log(preparationTime(layers));
// => 12

/* shortcut
export function quantities(layers) {
    return {
        noodles:layers.filter(word => word === 'noodles').length*50,
        sauce:layers.filter(word => word === 'sauce').length*0.2
    }
}
*/

export function quantities(layers) {
    let noodlesCounter = 0;
    let sauceCounter = 0;

    for (let i = 0; i < layers.length; i++) {
        if (layers[i] === 'noodles') {
            noodlesCounter++;
        } else if (layers[i] === 'sauce') {
            sauceCounter++;
        }
    }
    return {
        noodles: noodlesCounter * 50,
        sauce: sauceCounter * 0.2
    }
}

console.log(quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']));
// => { noodles: 100, sauce: 0.4 }

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1])
}
const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];

console.log(addSecretIngredient(friendsList, myList));
// => undefined
console.log(myList);
// => ['noodles', 'meat', 'sauce', 'mozzarella', 'kampot pepper']

export function scaleRecipe(recipe, portions) {
    let copyRecipe = { ...recipe }
    for (let layers in copyRecipe) {
        copyRecipe[layers] *= portions / 2
    }
    return copyRecipe
}

const recipe = {
    noodles: 200,
    sauce: 0.5,
    mozzarella: 1,
    meat: 100,
};

console.log(scaleRecipe(recipe, 4));
// =>
// {
//   noodles: 400,
//   sauce: 1,
//   mozzarella: 2,
//   meat: 200,
// };

console.log(recipe);
  // =>
  // {
  //   noodles: 200,
  //   sauce: 0.5,
  //   mozzarella: 1,
  //   meat: 100,
  // };