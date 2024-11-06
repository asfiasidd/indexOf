//lastIndex.Of
let str = "hello world javascript world";
console.log(str);
console.log(str.lastIndexOf("world"));


//to.String
let num = 56;
console.log(num + 2);
console.log(num.toString() * 66);



//boolen
let bool = false;
console.log(bool);
console.log(bool.toString());


//Array
let arr = ["apple", "banana", "mango"];
console.log(arr);
console.log(arr.toString());


//Concat
let sweet = ['cake', 'apple pie', 'cookie'];
let drinks = ['coke', 'milk shake'];
let fastfood = ['pizza', 'fries'];
let combo = sweet.concat(drinks , fastfood );
console.log(combo);



let greetMuslim = "Assalam O Alikum";
let greetNonMuslim = "Hello";
let name1 = prompt("Enter your name");
let gender = prompt("Enter your gender");
let religion = prompt("Enter your region");
let finalGreeting;

if (religion === "yes") {
    // If the person is Muslim
    if (gender === "male") {
      finalGreeting = greetMuslim.concat(" sir " + name1);
    } else if (gender.toLowerCase() === "female") {
      finalGreeting = greetMuslim.concat(" madam " + name1);
    } else {
      finalGreeting = greetMuslim.concat(", " + name1);
    }
  } else {
    // If the person is non-Muslim
    if (gender.toLowerCase() === "male") {
      finalGreeting = greetNonMuslim + " Mr. " + name1;
    } else if (gender.toLowerCase() === "female") {
      finalGreeting = greetNonMuslim + " Ms. " + name1;
    } else {
      finalGreeting = greetNonMuslim + ", " + name1;
    }
  }
  
  alert(finalGreeting);