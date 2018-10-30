const arr=[1,2,3,4,5]

for (let i=0; i<arr.length;i++){
    console.log(arr[i]);
}
/*
console.log("-------for each-----------") //current item in array is equivalent to item in forloop
arr.forEach(function(currentItemInArray, index, originalArr){
    console.log('currentItemInArray:', currentItemInArray);
    console.log("index: ", index)
    console.log("originalArr: ", originalArr)
});

const arr=[11,12,13,14,15];
const newArr=[]
for (let i=0; i<arr.length;i++)
{    newArr.push(arr[i]**2);
}
console.log('newArr: ', newArr)*/



const arr=[11,12,13,14,15];
const squaredArr=[]
arr.forEach((currentItem)=>{
    const square=currentItem**2;
    squaredArr.push(square);

});
console.log(squaredArr)
//fix me
/*
console.log("-------for each-----------") //current item in array is equivalent to item in forloop
["a","b","c","d","e"].forEach(function(currentItemInArray, index, originalArr){
    console.log('currentItemInArray:', currentItemInArray);
    console.log("index: ", index)
    console.log("originalArr: ", originalArr)
});*/