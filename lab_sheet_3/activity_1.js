function q_1_1(){
    var str1 = "Programmo";
    var str2 = "Phobia";

    var result =str1.concat(str2);

    alert("Concatenated string : "+result);

    
}

var str = "ProgrammoPhobia";

function q_1_2a(){

    var lower = str.toLowerCase();
    
    alert("LowerCase String : "+lower);
}

function q_1_2b(){
    var upper = str.toUpperCase();

    alert ("UpperCase String : "+upper);
}
function q_1_2c(){
    var str = "Programmo,Phobia";
    var split = str.split(",");
    alert ("Spilt String values : "+ "'"+split[0] +"' , '"+ split[1]+"'");
}
function q_1_2d(){
    var index = str.indexOf("Phobia");

    alert ("Index position of Phobia : "+index);
}
