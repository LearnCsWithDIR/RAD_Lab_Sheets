
function q_2_1(){
    let valu1,valu2;
    valu1 = document.getElementById("value1").checked;
    valu2 = document.getElementById("value2").checked;
    if (valu1 && valu2) {
        alert ("Both Value are : true");
    
    } else {
        alert ("Both Value are not : false");
        
    }


}

function q_2_2(){
    let value = document.getElementById("value").value;
    let type = typeof(value);
    alert("Natural number data type : "+type);
}

function q_2_3(){
    var currentDate =new Date();
    alert("Current Date : "+currentDate+"\n Current Date Type : "+typeof(currentDate));

}

function q_2_4(){
    var value = "OceanGate";
    var length = value.length;

    if (length>10) {
        alert(value+" length is greater than 10 characters \n"+"String length : "+length);
    } else {
        alert(value+" length is not greater than 10 characters\n"+"String length : "+length);
        
    }
}
