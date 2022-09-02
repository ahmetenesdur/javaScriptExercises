export const cost = (books) => {
    let amount = books.length * 800;
    let discounts = { 5: .25, 4: .2, 3: .1, 2: .05, 1: 0 };
    let books_set = [];
    console.log(books);
    while (books.length > 0) {
        books_set.push(new Set(books).size)
        console.log(books);
        console.log(books_set);
        for (let b of new Set(books)) {
            console.log(new Set(books));
            console.log(b);
            books.splice(books.indexOf(b), 1)
            console.log(books);
            console.log(books_set);
        }
    }
    console.log(books);
    console.log(books_set)
    while (books_set.includes(3) && books_set.includes(5)) {
        books_set.splice(books_set.indexOf(3), 1)
        books_set.splice(books_set.indexOf(5), 1)
        books_set.push(4, 4)
    }
    console.log(discounts[4]);
    return amount - books_set.reduce((prev, curr) => prev + (discounts[curr]) * 800 * curr, 0)
};

console.log(cost([1, 1, 2, 2, 3, 3, 4, 5, 1, 1, 2, 2, 3, 3, 4, 5]));

let a = [1, 2, 2, 3, 4, 5];
let b = new Set(a);
console.log(a);
a.splice(1, 1)
console.log(a);

// second solution
// const BOOK_COST = 800;
// const DISCOUNT = {
//     '1': 0,
//     '2': 0.05,
//     '3': 0.10,
//     '4': 0.20,
//     '5': 0.25
// };
// export const cost = (books) => {
//     let total = 0;
//     const subsets = [];
//     while (books.length > 0) {
//         const subset = [];
//         for (let i = 0; i < books.length; i++) {
//             const book = books[i];
//             if (!subset.includes(book)) {
//                 subset.push(book);
//                 books.splice(i, 1);
//                 i--;
//             }
//         }
//         subsets.push(subset);
//     }
//     console.log(subsets);
//     for (let j = 0; j < subsets.length; j++) {
//         for (let k = j + 1; k < subsets.length; k++) {
//             if (subsets[j].length === 5 && subsets[k].length === 3) {
//                 subsets[k].push(subsets[j].pop());
//             }
//         }
//     }
//     console.log(subsets);

//     subsets.forEach(subset => {
//         total += subset.length * (BOOK_COST - (BOOK_COST * DISCOUNT[subset.length]));
//     });
//     return total;
// };