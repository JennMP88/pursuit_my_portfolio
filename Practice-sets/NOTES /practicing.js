/*sampleconst addTwoNumbers=(a,b)=>{
    const sum=a+b;

addTwoNumbers=(1,8679)
const myAg=90;
const myOtherAge=101;

addTwoNumbers(myAge,myOtherAge);
*/

const exampleFunction=(callbackFn)=>{
   // console.log(typeof callbackFn)
    //console.log(callbackFn)

    callbackFn(1);
}
const logA=(function(){
        console.log("a")
        console.log("a")
        }
);
/*
callbackFn(1)
const logA=function(param,param){
        console.log("a")
        console.log(param,param2)
        }
);
//will give (1, undefined )
*/

const logB=(function(){
        console.log("b")}
);
const logC= (function(){
        console.log("c")} //logC will get passed into callbackFn(1) /backwards.

);
exampleFunction(logC); //PASSES IN THE VALUE AS AN ARGUMENT 
