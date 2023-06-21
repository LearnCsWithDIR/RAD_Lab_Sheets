
// Exercise_2
function exercise_2_1(){
    let Mark1,Mark2,Mark3;

    Mark1 = 30;
    Mark2 = 40;
    Mark3 = 90;

    let total,average;
    total = Mark1+Mark2+Mark3;
    average = total/3;

    alert("Total : " + total+"\nAverage : "+average);

}
function exercise_2_2(){
    let name,age,gender;

    name = "Dilum Induwara";
    age = 23;
    gender = "Male";

    alert("Name : " + name+"\nAge : "+age+"\nGender : "+gender);

}
function exercise_2_3(){
    let radius,area;

    radius = 5;
    area = Math.PI*radius*radius;

    alert("Area of a rectangle (radius = 5) : " + area);

}
function exercise_2_4(){

    let a,b;
    a=10;
    b=20;
    
    a+=b;
    document.write("<br><br>a +=b : "+a);

    a-=b;
    document.write("<br><br>a -=b : "+a);
    
    a*=b;
    document.write("<br><br>a *=b : "+a);
    
    a/=b;
    document.write("<br><br>a /=b : "+a);
    
    a%=b;
    document.write("<br><br>a %=b : "+a);
}
function exercise_2_5(){
    let x,y,txt1,txt2;

    x=5;
    y=4;
    txt1 = "A";
    txt2 = "B";

    
    alert("x>=y : " + x>=y);
    alert("x!=y : " + x!=y);
    alert("txt1 < txt2 : " + txt1<txt2);

}
function exercise_2_6(){
    let  statement1 ;
    let  statement2 ;
    statement1 = "what a very";
    statement2 = "nice day";

    let concat = statement1+" "+ statement2;
    alert(concat);
}

function exercise_2_7(){
    let x,y,z;
    x = 5 + 5;
    y = "5" + 5;
    z = "Hello" + 5;
    alert("x : "+x+"\ny : "+y+"\nz : "+z);
}



