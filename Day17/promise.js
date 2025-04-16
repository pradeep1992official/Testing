const promiseObj = new Promise((resolve, reject) => {
    alert("Producer code is executed as soon as Promise Object is created.");
    setTimeout(() => {
        resolve("Pradeep");
        // reject("Error");
    }, 2000);

});

console.log(promiseObj);

promiseObj.then((val) => {
    console.log("If resolved, this will be executed,",val)
}, (err) => {
    console.log("If error, this will be executed")
})

/* There are three states of promises :
1. Pending
2. Resolved
3. Rejected

Pending : 
    State when it is created
    Result will be undefined

Resolved:
    State when the promise is fullfilled
    Result will be value

Rejected :
    State when the promise fails/reject
    Result will be error
    
Two types of code in asyncronous : 
    1.Producer Code = resolve,reject ==> Producer code is executed as soon as Promise Object is created
    2.Consumer Code = then, catch
        then -> resolve,reject
        catch -> reject
    
*/

