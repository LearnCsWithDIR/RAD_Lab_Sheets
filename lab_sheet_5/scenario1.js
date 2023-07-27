class student {
    #indexNo; 
    #name;
    #DOB;
    #address;
    #contactNo;
    #emailaddress;

    constructor(indexNo, name, DOB, address, contactNo, emailaddress) {
        this.#indexNo = indexNo;
        this.#name = name;
        this.#DOB = DOB;
        this.#address = address;
        this.#contactNo = contactNo;
        this.#emailaddress = emailaddress;
        this.groupNo = null;
    }
    setDetails(indexNo, name, DOB, address, contactNo, emailaddress) {
        this.#indexNo = indexNo;
        this.#name = name;
        this.#DOB = DOB;
        this.#address = address;
        this.#contactNo = contactNo;
        this.#emailaddress = emailaddress;
       
      }
    

    setGroupNo() {
        const remainder = this.#indexNo % 4;
        if (remainder == 0) {
            this.groupNo = 1;
        }
        else if (remainder == 1) {
            this.groupNo = 2;
        }
        else if (remainder == 2) {
            this.groupNo = 3;
        }
        else {
            this.groupNo = 4;
        }
    }

    showDetails() {
        console.log("Index number :", this.#indexNo);
        console.log("Name:", this.#name);
        console.log("Date of birth:", this.#DOB);
        console.log("Address :", this.#address);
        console.log("Contact number :", this.#contactNo);
        console.log("Email address :", this.#emailaddress);

    }

    showGroupNo() {
        if (this.groupNo != null) {
            console.log("Group No:", this.groupNo);
        }
        else {
            console.log("Group Number is not set");
        }
    }
}
const student1 = new student(
    21001601, "Dilum Induwara", "2000-08-08", "12/C Flower Road", "077-2345678", "dilum2000@gmail.com"
);
student1.showDetails();
student1.setGroupNo();
student1.showGroupNo();
