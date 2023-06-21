const mammal = {
    color:"orange",
    type : "cat",
    legs:4,
    name:"kitty",
    speed :24
}
const person = {
    firstName:"John",
    lastName : "Deo",
    id:5566,
    fullName : function(){
        return this.firstName+" "+this.lastName;
    }
}
const triangle = {
    height:25,
    base :24,
 color:"Red",
    area : function(){
        return (1.0/2)*this.base*this.height;
    }
}


function exercise_4_1(){
    alert("color : "+mammal.color+"\ntype : "+mammal.type+"\nlegs : "+mammal.legs+
    "\nname : "+mammal.name+"\nspeed : "+mammal.speed);
}

function exercise_4_2(){
    alert("first Name : "+person.firstName+"\nlast Name : "+person.lastName+"\nid : "+person.id+
    "\nfull Name : "+person.fullName());
}
function exercise_4_3(){
    alert("height : "+triangle.height+"\nbase : "+triangle.base+"\ncolor : "+triangle.color+
    "\narea : "+triangle.area());
}

