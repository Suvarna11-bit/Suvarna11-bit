// import {useState,useEffect, Suspense} from "react";
// let box = document.getElementById("box");
// let size = 100;

// function increaseSize() {
//     size += 10;
//     box.style.width = size + "px";
//     box.style.height = size + "px";
// }

// function decreaseSize() {
//     if (size > 50) { // Prevents box from becoming too small
//         size -= 10;
//         box.style.width = size + "px";
//         box.style.height = size + "px";
//     }
// }


//code to find sum(a)(b) in es6 syntax:-


//  function sum(a){
//     return function(b){
//         return a + b;
//     };
//  }

//  console.log(sum(5)(3));

//how to write a function 
// const name = "Suvarna";

// function globalFunction(name){
//     console.log("Hello , i am global function" + " " + name);
// }
// globalFunction(name)

//generic function to add an array object in json object 

// function addArrayToJson(jsonObj, key , arrayData){
//     if(!Array.isArray(arrayData)){                        //check if arrayData is array or not 
//         throw new Error("This is expecting third argument");
//     }
//     jsonObj[key] = arrayData;
//     return jsonObj;
// }

// // Sample JSON object
// let jsonData = {
//     name: "John",
//     age: 30
// };

// // Sample array of objects
// let newArray = [
//     { id: 1, item: "Laptop" },
//     { id: 2, item: "Phone" }
// ];

// // Call the function
// let updatedJson = addArrayToJson(jsonData, "products", newArray);

// console.log(updatedJson);

// var x;          // declaration is hoisted but its value is still not hoisted , in let and var will give reference error 
// console.log(x);
// // var x = 10;
// x = 10;

// hello();       // function are hoisted properly and it will not give reference error amd function are treated as variables
// function hello(){
//     console.log("Hello");
// }

//Closure - Inner function has access to outer function even after function has finished executing

// function outerFunction(outerVar){
//     return function innerFunction(innerVar){
//       console.log(`Outer: ${outerVar},Inner: ${innerVar}`)   // we are using outer function variable here 
//     };
// }

// const newFunction = outerFunction("Hello");    // invoking it inside other function, and passing value to it 
// newFunction("World");                         //hence outer function takes hello and inner takes World


//Promise and setTimeout function 

// setTimeout(() => {
// console.log("Timeout")
// },1000);
// Promise.resolve()
// .then((res) => 
//     console.log("Success"))
// .catch((err) =>
//     console.log("Error")
// );



//Rest api in javascript using fetch api

// fetch("https://www.westpac.com",{ method: "GET"})
// .then(response => response.json())   //get response in json format
// .then(data => console.log(data))    // then get all data
// .catch(error => console.log("error:", error));     // and finally log an error


// difference between call, apply and bind 
//Note:- this refers to window object for arrow funtion , and only first bind is applied , all others are ignored 

// and if we apply call on bind then it wont happen as bind permanently sets this and call cannot override it 

// var obj = {name: "Suvarna"}
// function sayHello(age){
//     return "Hello" + this.name + "is" + age;
// };

// console.log(sayHello.call(obj,24));
// console.log(sayHello.apply(obj,[24]));
// const bindFunc = sayHello.bind(obj)   //reusable function
// console.log(bindFunc(24));


// Event bubbling and Capturing(botton to top and top to bottom)
// and then to apply capture , just add capture: true,

// document.getElementById("parent").addEventListener("click",() => console.log("Parent clicked!"), true);

// document.getElementById("child").addEventListener("click",() => console.log("Child clicked!"));

//in order to stop event bubbling or capturing use 

// e.stopPropogation();


//Debouncing and Throttling

// const debounce = (cb, delay) => {
//     let timer;
//     return function(...args){
//         if (timer) clearTimeout(timer);
//         timer = setTimeout(() => {
//             cb(...args);
//         }, 800);
//     };
// };

// const start = new Date().getTime();

// const myThrottle = (cb,d) => {
//     let last = 0;
//     return (...args) => {
//         let now = new Date().getTime();
//         if(now - last < 1000) return;
//         last = now;
//         return cb(...args);
//     };
// };


// map iterates over each element , but does not modify original array , filter , only iterates over which is necessary and reduce is something 
//which iterates over every elment and returns callback on every element

// const num = [1,2,3,4];

// num.map{
//     num => num *2;
// };



//Promises in javascript  --- object representing the eventual completion or failure of an asynchronous operation is called promise 

// const Promise1 = Promise.reject('Welcome to suvarna');
// Promise1.then(data => {
//     console.log('Promise success' + data)
// }).catch(error => {
//     console.log('Promise failed' + error)
// })


//if i want to add setTimeout -- Promise executes before the setTimeout
// function one(){
//     const Promise1 = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             reject('Welcome to suvarna')
//         },2000);
//     })
// }


//but promise inside promise is called promise chaining , so in order to solve this we have async and await 
//async is one which always returns a promise , and await helps to wait for function to execute, and also helps await handle the promises

// async function test(){
//     try{
//         const resp1 = await one();
//         const resp2 = await two();
//         const output = (resp1 + resp2);
//         console.log('response is ' + output);
//     }catch(err){
//         console.log('error is ' + err);
//     }
// }
// test()


//Objects in javascript:-(Object Literal)

const person1 = {
    name: "Suvarna",
    age: 25,
};

//Using new Object()

const person2 = new Object();
person2.name = "Rajput",
person2.age = 26;

//Using 



// function descending(arr){
//     console.log(arr);
//     let n = arr.length;
//     for(let i= 0;i < n-1;i++){
//        let maxNum = i;
//        console.log(maxNum);
//        for(let j= i+1;j < n;j++){
//         console.log(maxNum);
//            if (arr[j] > arr[maxNum]){ 
//            maxNum = j;
//        }
//     }
//        [arr[i],arr[maxNum]] = [arr[maxNum],arr[i]];
//     }
//     return arr;
// }
// console.log(descending([9,1,4,25]));



// const root = {
//     data: 10,
//     left: {
//         data: 8,
//         right: {
//             data: 12
//         }
//     },
//     right: {
//         data: 11
//     }
// };


// if we follow recursive approach , then we will first find max value in left and right , compare 1 and 2 values with main one(get max)

// function findMaxdata(n){
//    if(!n) return -Infinity;  //base , if n is null , then we will get smallest possible\

//    let leftMax = findMaxdata(n.left);
//    let rightMax = findMaxdata(n.right);

//    return Math.min(n.data,leftMax,rightMax);
// }

// console.log(findMaxdata(root));


// Example input: num1 ="123" and num2 ="59"
// Result is: "182"


// function Sum(num1,num2){
//     let carry = 0,
//     temp = [];

//     let length = Math.max(num1.length, num2.length);

//     // let i = num1.length - 1 ;
//     // j = num2.length - 1;

//     // while(i >= 0 || j >= 0 || carry > 0){
//         for(k = 0 ; k< length || carry > 0; k++){
//         let number1 = num1.length - 1 - k >= 0 ? parseInt(num1[k]) : 0;
//         let number2 = j >= 0 ? parseInt(num2[j]) : 0;

//         let sum = number1 + number2 + carry;
//         temp.push(sum % 10);
//         carry = sum > 9 ? 1 : 0;
//         i--;
//         j--;
//     }
//     return temp.reverse().join('');
// }

// console.log(Sum("123","59"));


//How to pass props:-

// function Greetings(props){
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>
//         </div>
//     );
// }
// console.log("Geeks");

//how to delete the element and unshift the array:-

//i/p = [1,2,3,4,5]   o/p=[5,1,2,3,4]

// let input = [1,2,3,4,5]
// let output = input.unshift(input.pop());    //unshfit is something which add element at start
// console.log(output);

//write a code from frontend that how can i handle API requests from API endpoint

// const Apiexample = () => {
//     const[data,setData] = useState(null);
//     const[load,setLoading] = useState(true);
//     const[error,setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try{
//                 setLoading(true);
//                 const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//                 if(!response.ok){
//                     throw new Error(`${response.status}`);
//                 }
//                 const result = await response.json();
//                 setData(result);
//             }catch(err) {
//                 setError(err.message);
//             }finally {
//                 setLoading(false);
//             }
//         };
//             fetchData();
//         }, []);

//         //render logic 

//         if (loading) return <p>Loading...</p>;
//          if(error) return <p>Error : {error}</p>;

//          return (
//             <div>
//                 <h1>Api data</h1>
//                 <p>{JSON.stringify(data,null,2)}</p>
//             </div>
//          )
//         };



//Code Splitting - splitting application in smaller chunks of code and only loaded when in demand , so that only required resources are downloaded,
//thus this reduce time for large applications

// import React, { lazy, Suspense } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// const Home = lazy(() => import(./Home));
// const Profile = lazy(() => import(./Profile));

// function App(){
//     return(
//         <Router>
//             <Suspense fallback={<h2>Loading...</h2>}>
//                 <Routes>
//                  <Route path="/" element={<Home/>}/>
//                  <Route path="/profile" element={<Profile/>}/>
//                 </Routes>
//             </Suspense>
//         </Router>
//     );
// }

//Lazy loading --helps render only what is necessary, loaded as needed and speed up initial  load time and manage resource utilization.


// import { Suspense } from "react";
// const OtherComponent = React.lazy(() =>
//     import('./OtherComponent')
// )

// function App(){
//     return(
//         <Suspense fallback={<h2>Loading...</h2>}>
//             <OtherComponent/>
//         </Suspense>
//     );
// }

// export default App;

// const DataList = () => {
//     const [items,setItems] = useState([]);
//       useEffect(() => {
//           //add logic here
//       },[]);
//       return(
//         <ul>
//             {items.map(item => (
//                 <li key={item.id}>{item.name}</li>
//             ))}
//         </ul>
//       );
// };

//Implement a simple Counter component using hooks that increment and decrements a number .

// const Counter = () => {
//     const [count,setCount] = useState(0);
//     return (
//         <div>
//             <p> Count: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>
//         </div>
//     );
// };
// export default Counter;





//JSX :- allows writing html like code in javascript 

// const element = <h1>Hello, React!</h1>;

//props in react :-

// used to pass data from parent to child components.

// const Greeting = ({name}) => <h1>Hello, {name}!</h1>;
// <Greeting name="Suvarna"/>;

//synthetic events are wrapper around native browser events for cross browser compatibility

{/* <button onClick={(e) => console.log(e)}>Click Me</button>; */}

//props drilling 
//passing props through multiple levels of components 

// const Parent = () => <Child message ="Hello"/>;
// const Child = ({message}) => <GrandChild message={message}/>;
// const GrandChild = ({message}) => <p>{message}</p>;

//Context Api
//in order to avoid prop drilling we use context api 

// const MyContext = React.createContext();
// const Parent = () => (
//     <MyContext.Provider value="Hello">
//         <Child/>
//     </MyContext.Provider>
// );
// const Child = () => {
//     const message = React.useContext(MyContext);
//     return <p>{message}</p>;
// }

//ref in react :- 
//ref allow direct access to DOM elements or react components .

// const MyComponent = () => {
//     const inputRef = React.useRef(null);
//     return <input ref={inputRef}/>;
// }


//forwardref in react 
//passing refs from parent to child components

// const Child = React.forrwardRef((props, ref) => <input ref={ref} />);

//useMemo 
//hook that catches expensive calculations .

// const result = useMemo(() => computeValue(a,b),[a,b]);

//useCallback 
//hook that memoizes functions to prevent unnecessary rerenders

// const memoizedCallback = useCallback(() => doSomething(a,b),[a,b]);

//useReducer - managed the complex state changes 

// const reducer = (state,action) => 
// (action.type === "increment" ? state + 1 : state);
// const [count,dispatch] = useReducer(reducer,0);

//Function prototype 
//every javascript function has a prototype property , which allows you to add properties/methodss to it .


function Person(name){
    this.name = name;
}
Person.prototype.greet = function(){
    console.log("Hello," + this.name);
};
const user = new Person("Suvarna");
user.greet(); // Hello, Suvarna

//Array Prototype 

Array.prototype.customFunction = function(){
    return this.map(item => item * 2);
};
console.log([1,2,3].customFunction());   //[2,4,,6]


//Object.create 
//creates a new object with specified prototype

const animal = {
    speak(){
        console.log(`${this.name} makes a sound`);
    }
};

//dog inherites properties from animal but remains a seperate object 
const dog = Object.create(animal);
dog.naame = "Buddy";
dog.speak(); //Buddy makes a sound


//simple way to show how to use async and await 

async function fetchData(){
    let response = await fetch("url");
        let data = await response.json();
        console.log(data);
}
fetchData();




