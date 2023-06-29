
function q_3_1(){

    const games = ["The Last of Us", "Uncharted", "God of War", "Bloodborne"];
    let index = games.indexOf("God of War");
    alert("' God of War ' index : "+index);
}
function q_3_2(array){

    const map = new Map(array);
    return map;

}

function display(){
    const array = [
        ['Name', 'John'],
        ['Age', 30],
        ['City', 'Colombo']
    ];
    let result = q_3_2(array);
    
    alert("Display Map : "+JSON.stringify(Array.from(result)));

}

function q_3_3(arr){
    const map2 =new Map(arr);
     map2.delete('Age');
     return map2;
 }

 function update(){
     const self2=[
     ['Name', 'John'],
     ['Age', 30],
     ['City', 'Colombo']
   ];

     const newresult= q_3_3(self2);
     alert("Updated map ="+JSON.stringify(Array.from(newresult)));
 }

function q_3_4(){

    let myMap = new Map();
    myMap.set("apple",5);
    myMap.set("banana",3);
    myMap.set("orange",5);

    let value = myMap.get("banana");
    let size = myMap.size;
    alert("DisplayMap : "+JSON.stringify(Array.from(myMap))+
        "\nbanana Key Value : "+value+
        "\nNumber of element in the Map : "+size);

}