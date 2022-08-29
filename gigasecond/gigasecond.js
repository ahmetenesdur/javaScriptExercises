export const gigasecond = (time) => {
    return new Date(time.getTime() + 1e12)
};

// short way
// export const gigasecond = date => new Date(date.getTime() + 1e12)

console.log(gigasecond(new Date(Date.UTC(1977, 5, 13))));
console.log(gigasecond(new Date(Date.UTC(2020, 0, 4, 20, 28, 30))));
console.log(Date.UTC(1977, 5, 13));
console.log(new Date(Date.UTC(1977, 5, 13)).getTime());
console.log(new Date(Date.UTC(1977, 5, 13)));