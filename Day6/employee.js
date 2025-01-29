const employees = [
  {
    name: "employee1",
    age: 27,
    department: "Sales",
    email: "employee1@gmail.com",
  },
  {
    name: "employee2",
    age: 28,
    department: "Sales",
    email: "employee2@gmail.com",
  },
  {
    name: "employee3",
    age: 30,
    department: "TL",
    email: "employee3@gmail.com",
  },
  {
    name: "employee4",
    age: 38,
    department: "Manager",
    email: "employee4@gmail.com",
  },
];

function createEmployeeReports(employees) {
  for (var i = 0; i < employees.length; i++) {
    var { name, age, department, email } = employees[i];
    console.log(
      "Name : " +
        name +
        " Age :" +
        age +
        "Department : " +
        department +
        "Email : " +
        email
    );
  }
}
var report = [];
function createEmployeeReports_method2(array) {
  array.forEach((element) => {
    var { name, age, department, email } = element;
    const text = `Name : ${name}, Age : ${age}, Department : ${department}, Email : ${email}`;
    report.push(text);
  });

  return report;
}

createEmployeeReports(employees); //method 1- > forloop, nil return

console.log(createEmployeeReports_method2(employees).join("\n")); //method2 - > foreach, return function


