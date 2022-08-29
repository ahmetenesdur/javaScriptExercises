const nucleotide = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
}

export const toRna = (strands) => {
    return strands.split('').map(element => nucleotide[element]).join('');
}

console.log(toRna('ACGTGGTCTTAA'));
console.log(toRna('A'));
console.log(toRna(''));

