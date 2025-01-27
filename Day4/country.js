//XMLH HTTPS Request
var list = new XMLHttpRequest();                                             //create a new request

list.open("GET", "https://restcountries.com/v3.1/all/", true);      //Opens the JSON URL

console.log("Displaying countries with population > 140000000")

list.onload = function () {                                                        //Onload functions
    var count = 0;
    if((list.status >= 200 && list.status<300)) {
        console.log("Error");                                                       //if onload failure, ouputs error
    } else {
        var arrCountry = JSON.parse(list.responseText);               //JSON text will be parsed and saved in arrCountry Object
        
        arrCountry.forEach(element => {                                    //loops all the elements in the object arrCountry
            if(element.population > 140000000) {
                console.log(element.name.common + " : " + element.population )
                count += 1;
            }                                     
        });
        console.log("The total Countries with the criteria is : " + count);
    }
}
list.send();                                                                            //Send the output

