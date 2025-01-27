var obj1 = {name : "person1", age : 5,};        //Object1
var obj2 = {age : 5, name : "person1"};         //Object2

function areObjEqual(Para1, Para2) {             //returns 'true' if the Objects are equal, but any/same order

    var arrKeyObj1 = Object.keys(Para1);            //Copies the 'Keys' of Object1 into a array of arrKeyObj[];
    var arrKeyObj2 = Object.keys(Para2);            //Gets the 'Keys' of Object2 -> using only to compare length. 

    if(arrKeyObj1.length !== arrKeyObj2.length) {       //return false if  the length doesnt match
        return false;
    }

    for(var data of arrKeyObj1) {                           //iterates for all the contents in array arrKeyObj1
        if(Para1[data] !== Para2[data]) {               //Compare the contents of both the Objects with respective keys 
            return false;
        }
    }
return true;
}

console.log(areObjEqual(obj1,obj2));                //Calls the function