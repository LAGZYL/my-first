function addNumbers(a, b) {
    return a + b;
}
addNumbers(5, 10);

class Score {
    #parentsname
    constructor(name, totalscore, grade, parentsname){
        this.name = name;
        this.totalscore = totalscore;
        this.grade = grade;
        this.#parentsname = parentsname;
    }
    youPass(){
        if(this.totalscore >= 50){
            console.log("you passed the course")

        }if (this.grade >= 40) {
            console.log("you passed the course")
        }else{
            console.log("failed")
        }
        
    }
}

studentScore = new Score(`Adegboyega`, 70, `A`, `Ayodele` );
studentScore.youPass();


