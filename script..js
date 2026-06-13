// for(let name=1;name<=100000;name++) {
//     console.log("vikash");
// }
// console.log("program execution iss compelelted");


// let name=0;
// for(let i=0;i<=10;i++){
//     // name+=i;
//     console.log("name=",name);
// }

// let i=0;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

// let i=0;
// do{
//     console.log("apna=",i)
//     i++;
// }while(i<=10);

//for of loop

// let str="javascript";
// let length=0;
// for (let i of str){
//     console.log("i=",i);
//     i++;
//     length++;
// }
// console.log("length size=",length);

//for in loop

// let student={
//     sno:1,
//     name:"vikash",
//     marks:12.3,
//     pass:"True",
// }

// for (let i in student){
//     console.log("key=",i,"value=",student[i]);
// }

// partice

// for(let a=2;a<=100;a+=2){
//     console.log(a);
// }

//partice1
// for(let a=0;a<=100;a++){
//     if(a%2==0){
//         console.log(a);
//     }
// }

//partice2
// let a=10;
// let usernum=prompt("enter the number:");

// while(usernum!=a){
//     usernum=prompt("you number is invalid try it again:");
// }
// console.log('congratulation , your enter number is true',a)

// //string
// let str="vikash";
//  console.log(str[5]);

// let obj={
//     item:"pen",
//     price:20,
// };
// console.log("the cost of",obj.item,"is",obj.price,"rupess")   ; 


// //temple literal
//  let obj={
//     item:"pen",
//     price:80,
//  };
// let output=`the cost of ${obj.item} is ${obj.price} rupess `; 
// console.log(output);

//storing
// let str="apnacolge";
// console.log(str.slice(1,3));

//conat
// let a="vikash";
// let b="thakur";
// // let res=a.concat(b);
// let res=a+b;
// console.log(res)

// // replace
// let a="hhhhhhello";
// // console.log(a.replace("h","u"))
// console.log(a.replaceAll("h","u"))


// //charti
// let a="khfx";
// console.log(a.charAt(2)); 


// Prefix @ to username
let username = prompt("Enter your name");
username = "@" + username+username.length;
console.log(username);