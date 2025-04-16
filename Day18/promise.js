let  promiseObj = new Promise((resolve, reject)=>{
    // Produce Code
    setTimeout(()=>{
        console.log("The data was available");
        resolve("Success, Mr.Pradeep");
    },2000);
});

promiseObj.then((val)=>{
    console.log("The result is : ", val);
},(err)=>{
    console.log("The result is : ", err);
})