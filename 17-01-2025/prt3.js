//Contact manager Application

var allContacts = [
  {
    fName: "Pradeep",
    phNum: "8144404504",
    eMail: "sample@gmail.com",
  },
  {
    fName: "HasmaShruthi",
    phNum: "9942555292",
    eMail: "sample1@gmail.com",
  },
  {
    fName: "Lavanya",
    phNum: "960022606",
    eMail: "sample2@gmail.com",
  },
];

var userInput = 0;

function contactDisplay() {
  for (var i = 0; i < allContacts.length; i++) {
    console.log("Contact Number ", i + 1);
    console.log(allContacts[i].fName);
    console.log(allContacts[i].phNum);
    console.log(allContacts[i].eMail + "\n\n");
  }
}

while (userInput != "Exit") {
  userInput = prompt("Enter your Operation : \nView - Add - Delete - Exit");
  switch (userInput) {
    case "View":
      console.clear();
      contactDisplay();
      break;
``
    case "Add":
      console.clear();
      var newfName = prompt("Enter the First Name.");
      var newphNum = prompt("Enter the Phone Number.");
      var neweMail = prompt("Enter the E-Mail.");
      allContacts.push({
        fName: newfName,
        phNum: newphNum,
        eMail: neweMail,
      });
      contactDisplay();
      break;

    case "Delete":
      console.clear();
      var choice = prompt("Do you wish to delete the last Contact? (Y/N)");
      if (choice == "Y") {
        allContacts.pop();
        contactDisplay();
      } else if (choice == "N") {
        var searchName = prompt(
          "Input the exact name of the Contact to delete : "
        );
        var deleteStatus = 0;
        for (var i = 0; i < allContacts.length; i++) {
          if (searchName == allContacts[i].fName) {
            allContacts.splice(i, 1);
            deleteStatus = 1;
          }
        }

        if (deleteStatus) {
          console.log("Delete Done");
          contactDisplay();
        } else {
          console.log("No contact found");
        }
      } else {
        console.log("Improper Input");
      }
      break;

    default:
      console.clear();
      console.log("Improper Input");
  }
}
