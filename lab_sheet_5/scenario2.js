class Examamination{
    #indexNumber;
    #MCQmarks;
    #EssayMarks;

    constructor(indexNumber,MCQmarks,EssayMarks){
        this.#indexNumber=indexNumber;
        this.#MCQmarks= MCQmarks;
        this.#EssayMarks = EssayMarks;
        this.totalMarks= null;
        this.result= null;
        this.grade = null;

    }

    InsertMarks(indexNumber,MCQmarks,EssayMarks){
        this.#indexNumber=indexNumber;
        this.#MCQmarks= MCQmarks;
        this.#EssayMarks = EssayMarks;
    }

    CalculateTotalMarks(){
        this.totalMarks = this.#MCQmarks + this.#EssayMarks;
    }

    DisplayTotalMarks(){
        console.log("Total Marks : ",this.totalMarks);
    }

    CalculateResult(){
        if(this.totalMarks >= 50){
            this.result= "Pass";
        }
        else{
            this.result = "Fail";
        }
    }

    DisplayResult(){
        console.log("Result : ",this.result);
    }

    CalculateGrade(){
        if(this.totalMarks >= 75){
            this.grade= "Grade A";
        }
        else if(this.totalMarks >= 65){
            this.grade= "Grade B";
        }
        else if(this.totalMarks >= 55){
            this.grade= "Grade C";
        }
        else if(this.totalMarks >= 35){
            this.grade= "Grade S";
        }
        else{
            this.grade= "Grade W";
        }

    }

    DisplayGrade(){
        console.log("Grade : ",this.grade);
    }
}

const Student = new Examamination;
Student.InsertMarks("21001601", 60, 70);
Student.CalculateTotalMarks();
Student.DisplayTotalMarks();
Student.CalculateResult();
Student.DisplayResult();
Student.CalculateGrade();
Student.DisplayGrade();