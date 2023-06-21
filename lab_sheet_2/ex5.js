function exercise_5_1() {
  let time = new Date();
  let hour = time.getHours();

  if (hour < 10) {
    alert("Good morning");
  } else if (hour < 20) {
    alert("Good day");
  } else {
    alert("Good evening");
  }
}

function exercise_5_2() {
  let fruit = document.getElementById("value").value;
  switch (fruit) {
    case "banana":
      alert("Yellow");
      break;

    case "pineapple":
      alert("Orange");
      break;

    case "apple":
      alert("Green");
      break;

    default:
      break;
  }
}
function exercise_5_3() {
  let num1, num2, num3;

  num1 = document.getElementById("number_1").value;
  num2 = document.getElementById("number_2").value;
  num3 = document.getElementById("number_3").value;

  if (num1 > num2 && num1 > num3) {
    alert("Largest number is " + num1);
  } else if (num2 > num1 && num2 > num3) {
    alert("Largest number is " + num2);
  } else {
    alert("Largest number is " + num3);
  }
}
function exercise_5_4() {
  let number = document.getElementById("number").value;

  if (number == 1) {
    alert(number + " is not a prime number.");
  } else if (number == 2) {
    alert(number + " is a prime number.");
  } else {
    let count = 0;
    for (let i = 3; i < number; i++) {
      if (number % i == 0) {
        count += 1;
        break;
      }
    }
    if (count > 0) {
      alert(number + " is not a prime number.");
    } else {
      alert(number + " is a prime number.");
    }
  }
}
function exercise_5_5() {
  document.write("<b>Odd numbers between 1 to 30:</b><br> <br>");
  for (let i = 0; i < 30; i++) {
    if (i % 2 != 0) {
      document.write(i + " ");
    }
  }
}

function exercise_5_6() {
  const array = [10, 15, 60, 70, 80, 9, 4, 156];

  for (let i = 0; i < array.length; i++) {
    document.write(array[i] + " ");
  }
}

function exercise_5_7() {
  const numbers = [80, 30, 40, 50, 23];
  numbers[2] = 78;
  let length = numbers.length;
  let min;

  for (let i = 0; i < numbers.length; i++) {
    min = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [numbers[i], numbers[min]] = [numbers[min], numbers[i]];
    }
  }
  alert("Length : " + length + "\nSorted array : " + numbers);
}

function exercise_5_8() {
  const names = ["sadun", "kamal", "nimal", "ruwan"];
  
  const namesString = names.join(",");
  document.write("<b>array into string : </b>"+names);

  names.pop();
  document.write("<br><b>After remove the last element :</b> "+names);
  names.push("nuwani");
  document.write("<br><b>After Add a new item :</b> "+names);


}
function exercise_5_9() {
  const myGirls = ["Cecilie", "Lone"];
  const myBoys = ["Emil", "Tobias", "Linus"];
  let merge=[];

  for (let i = 0; i < myGirls.length+myBoys.length; i++) {

    if (i<myGirls.length) {
        merge[i] = myGirls[i];
    }
    else{
        merge[i] = myBoys[i-myGirls.length];

    }    
  }
  alert("Merge Array : "+merge);


}
function exercise_5_10() {
  let total=0;
  const numbersArray = [1, 13, 22, 123, 49];
  for (let i = 0; i < numbersArray.length; i++) {
    total += numbersArray[i];
  }
  alert("sum of all the numbers : " + total);
}
