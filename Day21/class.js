class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }

  onComplete() {
    this.completed = !this.completed;
  }
}

function testClass() {
  const task = new Task("Becoming CEO");
  task.onComplete();
  document.getElementById("classOP").innerHTML = `
    <strong>The Task is  ${task.description} and its status is ${task.completed}
    </strong>`;
}
