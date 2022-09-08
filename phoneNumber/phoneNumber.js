//Clean up user-entered phone numbers so that they can be sent SMS messages.

export const clean = (number) => {
    let cleaned = number.replace(/[^0-9]/g, '');
    if (cleaned.length === 11 && cleaned[0] === '1') cleaned = cleaned.slice(1);
    if (cleaned.length < 9) {
        if (number.match(/[a-zA-Z]/g, '').length > 0) throw new Error('Letters not permitted');
        if (number.match(/[^a-zA-Z0-9]/g, '').length > 0) throw new Error('Punctuations not permitted');
    }

    if (cleaned.length < 10) throw new Error('Incorrect number of digits');
    if (cleaned.length === 11) throw new Error('11 digits must start with 1');
    if (cleaned.length > 11) throw new Error('More than 11 digits');
    if (cleaned[0] === '0') throw new Error('Area code cannot start with zero');
    if (cleaned[0] === '1') throw new Error('Area code cannot start with one');
    if (cleaned[3] === '0') throw new Error('Exchange code cannot start with zero');
    if (cleaned[3] === '1') throw new Error('Exchange code cannot start with one');

    return cleaned;
};

console.log(clean('123-@:!-7890'));