var obj1 = {name : "person1", age : 5};
var obj2 = {age : 5, name : "person1"};

var arrObj1 = Object.keys(obj1);
var arrObj2 = Object.keys(obj2);


if(arrObj1.length == arrObj2.length) {
    console.log("Same Length");
} else {
    console.log("The keys of the objects are not equal");
}
var condition=0;
for(var i=0; i<arrObj1.length;i++) {
    if(obj1[arrObj1[i]] == obj2[arrObj1[i]]) {
            condition += 1;
    }
}

if(condition == arrObj1.length) {
    console.log ("But in different order")
}