// // loops in js 
// for(let i = 1; i <= 10; i++){
//     console.log(" ayush jha ");
// } // for loop 
// let i = -20;
// while(i <=10){
//     console.log(i , " ayush jha ");
//     i++;
// }// // while loop 
// let i = 10
// do { console.log(i , "ayush jha");
//     i++;
// }while(i <= 10);
// for of loop
// let str = "ayush jha";
// let chracter = 0;
// for(let y of str){
//     console.log("ff=",y);
//     chracter++;
// }
// console.log("total chracter in string is " + chracter); 
// for in loop 
// let obj = {
//     name : "ayush",
//     class : "collage 1st year",
//     marks : 80,
// };
// for(let x in obj){
//     console.log(x ,  ":", obj[x]);
// }
//  // practice question 1 
//  for(let  number = 0 ; number <=100; number++){
// //     if(number %2 !== 0)
//     console.log( "number" , number);
//  } // even or odd number 
// question 2
// let number = 77;
// let usernumber = prompt("guess the number between 1 to 100");
// while( usernumber != number){
//     usernumber = prompt("wrong number guess again");
// }
// alert("congratulation you guess the number");


// string in js 
// let str = "ayush jha";
// let str2 = 'rashi jha';
// str.length; 
// console.log(str);
// console.log(str2);
// console.log(str.length);
// console.log(str2.length);
// console.log(str[3]);
// console.log(str2[7]);

// template literals in js
//  let obj = {
//     name : "ayush",
//     class : "collage 1st year",
//  };
//  let output = `my name is ${obj.name} and i am in ${obj.class}`;
//     console.log(output);
 // escape characters in js
//  let str = `ayush \n jha`;  ///n is used for new line in js
//  console.log(str); // /l is used for tab in js
//  let str2 = "ayush \t jha";
//  console.log(str2);
// string methods in js
// let str = "ayush jha";
// let str2 = "rashi jha";
// str= str.toLowerCase(); // convert string to lowercase
// console.log(str);
// str = str.toUpperCase(); // convert string to uppercase
// console.log(str);
// str = str.trim(); // remove whitespace from both ends of a string
// console.log(str);
// str = str.replace("ayush", "chirag"); // replace a specified value with another value in a string
// console.log(str);
// str = str.slice(0, 5); // extract a part of a string and return a new string
// console.log(str);
// str = str.split(" "); // split a string into an array of substrings
// console.log(str);
// str = str.join("-"); // join all elements of an array into a string
// console.log(str);
// let result = str.concat(str2); // concatenate two or more strings
// console.log(result);
// // or 
// let result2 = str+str2; // concatenate two or more strings
// console.log(result2);
// str = str.charAt(4);
// console.log(str); // return the character at a specified index in a string
// question 1 

// let username = prompt("enter your fullname");
// let email = prompt("enter your email");
// let password = prompt("enter your password");
// let confirmPassword = prompt("confirm your password");  
// if(password === confirmPassword){
//     console.log("registration successful");
// } else {
//     console.log("password does not match");
// } 