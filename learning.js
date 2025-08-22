function addNumbers(a, b) {
    return a + b;
}
addNumbers(5, 10);

class Score {
    #parentsname
    constructor(name, totalscore, grade, parentsname){
        this.name = name
        this.totalscore = totalscore
        this.grade = grade
        this.#parentsname = parentsname
    }
}

