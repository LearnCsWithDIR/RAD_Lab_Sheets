class Employee{
    constructor(id,name,address,phnNumber,NIC,joinedDate,desination,salary){
        this.id=id;
        this.name=name;
        this.address=address;
        this.phnNumber=phnNumber;
        this.NIC=NIC;
        this.joinedDate=joinedDate;
        this.desination=desination;
        this.salary=salary;
        
    } 
    
    ArrivalTime(time){
            return "Arrives at"+time;
    }
    dutyOffTime(time){
        return "Leaves at"+time;

    }
    leaveEmp(date,numberofDays,reason){
        return "Your Leave date is "+date +", Working with "+numberofDays+" Days & Reason is "+ reason ;
    }
    getlunch(lunch){
        this.lunch = lunch;
    }
}

class temporaryEmp extends Employee{

    constructor(duration=6){
        super(duration);
        this.duration=duration;
    }
    timeExtend(workingMonth){
        if (workingMonth>3) {
            return this.duration + 6;
            
        }else{
            return "You Can't extend your working period."
        }
    }
}
class contractEmp extends Employee{

    constructor(duration=12){
        super(duration);
        this.duration =duration;
    }
    
    timeExtend(){
        if (workingMonth>3) {
            return this.duration + 12;
            
        }else{
            return "You Can't extend your working period."
        }
    }
}