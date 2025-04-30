document.addEventListener("DOMContentLoaded", () => {
  fetchUser();
});

let users = [];

//fetch the user datas from the JSON placeholder and save in users array.
async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  users = await response.json();
  renderUser();
}

//renders the details in the tableList
function renderUser() {
  const tableList = document.getElementById("lists");
  tableList.innerHTML = "";

  users.forEach((data, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${index + 1}</td> <td>${data.name}</td><td>${
      data.email
    }</td>
    <td><button class="btn btn-secondary btn-sm" onclick="edituser(${
      data.id
    })">Edit</button>
    <button class="btn btn-danger btn-sm" onclick="deleteUser(${
      data.id
    })">Delete</button></td>`;
    tableList.appendChild(row);
  });
}

async function submit() {
  // alert("");
  let id = document.getElementById("userID").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const user = { id, name, email };

  if (id) {
    const userIndex = users.findIndex((u) => u.id.toString() == id); //Finding index related to the ID
    users[userIndex] = { ...users[userIndex], name, email }; //Appended the updated value to the users array with index id
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      //update the API
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  } else {
    //Creating Phase
    id = users.length + 1;

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id, name, email }),
    });

    const newUser = await response.json();
    users.push(newUser);
  }
  renderUser();
  resetForm();
}

//reset the datas of the form
function resetForm() {
  document.getElementById("userID").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}

//Edit User
async function edituser(userData) {
  const user = users.find((u) => u.id === userData);
  document.getElementById("userID").value = user.id;
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
}

async function deleteUser(userID) {
  users = users.filter((u)=>u.id != userID)
  await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`, {
    method: 'DELETE',
  });
  renderUser();
}
