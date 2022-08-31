export const hey = (message) => {
    if (message.toUpperCase() === message && message.trim().endsWith('?') && /[A-Z]/.test(message)) {
        return 'Calm down, I know what I\'m doing!'
    } else if (message.trim().endsWith('?')) {
        return 'Sure.';
    } else if (message.toUpperCase() === message && message.trim() !== '' && /[A-Z]/.test(message)) {
        return 'Whoa, chill out!';
    } else if (message.trim() === '') {
        return 'Fine. Be that way!';
    } else {
        return 'Whatever.';
    }
}

console.log(hey('1, 2, 3'));
//Whatever.
console.log(hey('4?'));
//Sure.
console.log(hey(':) ?'));
//Sure.

// let a = 'ASDSA?';
// if (/[A-Z]/.test(a)) {
//     console.log('lol');
// }
