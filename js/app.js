/*function add() {
    return 3+5
}

console.log(add()) */

//     asignement operators
// a = 5 // = is the basic asignement operator

//comparison operators
/* a comparison op returns a boolean value indicating that the comparison is true or not
*
* let r = 10 > 4 //true
* let r = 12 < 41 //false
*
* let apple = {
    valueof: function () {
        return'20'
    }
}
console.log(apple > 10) //false
*
* // if...statements
const num =prompt('enter a number: ')
if (num > 0) {
    console.log('the number positie')
}

console.log('is statement is easy')
*
*
            //for loop
const num = 5
for (let i = 0; i < num; i++) {
    console.log('javascript is cool!!!');
}

*   //   while loop

sum = 0

let numb1 = parseInt(prompt('enter a number: '))
 while (numb1 >= 0) {
    sum += numb1

     numb1 = parseInt(prompt('enter a positive: '))
 }

console.log(`the sum is ${sum}`)

* //  second text
*
* let input = '';

while (input !== 'exit') {
    input = prompt('Enter something (type "exit" to quit):');
    console.log('You entered:', input);
}

* // reverse a string using a js stack
function  reserve(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i])
    }

    let reversestr =""
    while (stack.length>0) {
        reversestr += stack.pop()
    }
    return reversestr;
}

console.log(reserve('javascript stack'))

// test if an aray has numbers less than zero
let number = [1,3, 5]

let result = number.every(function (e) {
    return e > 0
})

console.log(result) //true
*

* //   array indexof() method

let scores = [10,20,30,10,40,20]

console.log(scores.indexOf(20, 0))

*
// forEach() method

let ranks = ['A','B','C']
ranks.forEach(function (i) {
    console.log(i)
})

* function add (a,b) {
    return a+b;
}

let sum = add; //add is a function
function avg(a, b, fn) {
    return fn(a, b)/2
}

let result = avg(10, 20, sum);
console.log(result);

* //  Anonymous function
*let show = function () {
    console.log('anonymous fn')
}
* let show = () =>
    console.log('anonymous fn')

let add = (a,b) =>
    a+b;


console.log(add(2,5))
*
*
* //call back functions

let number = [1,2,4,7,3,5,6];

function isoddnumber (number) {
    return number % 2;
}

const  oddNumber = number.filter(isoddnumber);
console.log(oddNumber)
*
*

    //objects in js

let person ={
    firstname: 'kev',
    lastname: 'enka',
}

console.log( person.firstname)


person.age = 22

console.log(person["firstname"] ,' i am ',person["age"])
*
* // create a method

 greet = function (){
    console.log('hello!!')

}

//adding the greet method in the person object
person.greet= greet

person.greet()

let person ={
    firstname: 'kev',
    lastname: 'enka',


    //method
    greet(){
        console.log('nice day')
    }
}
*
*
let person = {
    firstname: 'kev',
    lastname: 'enka',
    fullname(){
        return this.firstname +' '+ this.lastname
}

}

console.log(person.fullname())



//Promise object in js

const isphoneStore =true;
const isphoneAvailable=true;

function processMessage(){
    return new promise((resolve, reject) =>{
        if(!isphoneStore) {
           reject({
               name:'wrong Store',
               message:'Sorry, this is a foodstore!',
           });
        }else if(!isphoneAvailable){
            reject({
                name:'Out of stock',
                message:'Sorry, this phone out stock!',
            });
        }else {
            resolve({
                name:'OK',
                message:'how many do you need?',
            });
        }
    });
}

processMessage()
    .then(response => console.log(response))
        .catch(error => console.log(error));

*   function getName(){
    let fname='john';
    let    lname='stone';

    return [fname,lname]
}

//console.log(getName())
name=getName();

console.log(name)

*
//advance function
  //the Aply() and call() methods

let dog={type: 'dog',sound:'woof'}
let cat={type: 'cat',sound:'meow'}

let say =function (greetings){
    console.log(greetings)

    console.log(this.type+' says '+this.sound);
}
say.apply(cat,['hi'])

    //recursive funtions
function countdown(numb){
    console.log(numb)

  let newNumber=countdown(numb-1)
    if (newNumber>0){
        countdown(newNumber)
    }
}

countdown(6);

*
*
*
//lexical scoping
function greeting(){
    message='Hell guys';

    function sayhi(){
        console.log(message)

    }
    sayhi()
}

greeting()

//js closure

function salut(saysomething){

    return function (name){
        console.log(saysomething +' '+ name)
    }
}

let talk=salut('Hello guys');

console.log(talk('kevin'));

//js scope with loop

for (let i = 0; i <=3 ; i++) {
    setTimeout(function (){
        console.log('after '+i+' second(s): '+ i)
    },i*1000)
}
*
*   //js try and catch

try{
    unknownFunction();
}catch (error){
    console.log(error.name+' : '+error.message)
}

function test() {
    try {
        return1
    }catch (error){
        return 2
    }finally {
        return 3
    }
}

console.log(test()); //3

try {
    name.do()
}catch (error){
    console.log(error.name)//give the error name
    console.log(error.message) //give an error messege
}

function  add(a,b){
    if(typeof a !== 'number'){
        throw TypeError('the first argument must be a number')
    }
    if(typeof b!=='number'){
        console.log('the second argument must be a number')
    }
    return a+b
}

console.log(add("3", 2))

* */

//js

//fetch APi

function add(a,b){

    return a+b;
}

console.log(add(2,3))



























