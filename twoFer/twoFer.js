export const twoFer = (name = 'you') => {
    return `One for ${name}, one for me.`
    // return `One for ${name ? name : 'you'}, one for me.`

};

console.log(twoFer('Alice'));
console.log(twoFer());