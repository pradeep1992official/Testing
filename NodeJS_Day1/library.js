const fs = require("fs"); //Module Requirement for the File System
const path = require("path"); //Module Requirement for the Path
const chalk = require("chalk");

const folderPath = path.join(__dirname, "Library"); //Creating a folder in the current directory

if(fs.existsSync(folderPath)) { //creates new folder if doesnt exists.
  console.log(chalk.blue.bgRed("Folder already exists"));
}
else {
  fs.mkdirSync(folderPath); //Function to create a new directory
  console.log("Folder Created Successfully")
}

function addBooks(bookName, content) { //function to add txt file with its book name and the content
  const bookPath = path.join(folderPath , `${bookName}.txt`); //Path generation for the new file to be written

  fs.writeFileSync(bookPath, content, (err) => { //Function to write a file 
    if(err) {
      console.log("The error is : ", err );
    }
    else {
      console.log("Write successful");
    }
  });
}

addBooks("Harry Potter", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur velit, distinctio esse eveniet officiis illum nesciunt delectus beatae quae iure dolor! Labore, facilis.");
