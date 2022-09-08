export const isPaired = (brackets) => {
    const opening = ['[', '(', '{'];
    const closing = [']', ')', '}'];
    const stack = [];
    for (let i = 0; i < brackets.length; i++) {
        const bracket = brackets[i];
        if (opening.includes(bracket)) stack.push(bracket);
        else if (closing.includes(bracket)) {
            const index = closing.indexOf(bracket);
            const lastBracket = stack.pop();
            if (lastBracket !== opening[index]) return false;
        }
    }
    return stack.length === 0;
};

console.log(isPaired('}{')); // false