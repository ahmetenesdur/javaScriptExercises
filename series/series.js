export class Series {
    constructor(series) {
        this.series = series;
    }

    slices(sliceLength) {
        if (this.series.length === 0) throw new Error('series cannot be empty')
        if (sliceLength > this.series.length) throw new Error('slice length cannot be greater than series length')
        if (sliceLength === 0) throw new Error('slice length cannot be zero')
        if (sliceLength < 0) throw new Error('slice length cannot be negative')
        let result = [];
        for (let i = 0; i <= this.series.length - sliceLength; i++) {
            result.push(this.series.slice(i, i + sliceLength));
        }
        return result.map(x => x.split('').map(Number));
    }
}

console.log(new Series('9142').slices(2));
console.log(new Series('').slices(1));