// let  add = (callback) => {
//     let x=1;
//     let y=2;
//     console.log("The sum is : ", x+y);
//     callback();
// }
 
// const completionStatus = () => {
//     console.log("Completed");
// }

// add(completionStatus);

let subtract = (callback) => {
    let a = 30;
    let b = 20;
    console.log("The difference is : ", a-b);
    callback();
}

subtract(CompletedStatus);

const CompletedStatus = () => {
    console.log("The difference is calculated");
}