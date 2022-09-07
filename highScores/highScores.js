export class HighScores {
    constructor(input) {
        this.score = input;
    }

    get scores() {
        return this.score;
    }
    get latest() {
        return this.score[this.score.length - 1];
    }
    get personalBest() {
        return Math.max(...this.score);
    }
    get personalTopThree() {
        return [...this.score].sort((a, b) => b - a).slice(0, 3);
    }
}

const input = [100, 0, 90, 30];
const highScores = new HighScores(input);
console.log(highScores.scores);
console.log(highScores.latest);
console.log(highScores.personalBest);
console.log(highScores.personalTopThree);
console.log(highScores.scores);
