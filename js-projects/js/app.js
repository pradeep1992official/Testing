import { TaskManager } from "./taskManager.js"

const manager = new TaskManager;
manager.addTasks("Learning New JS Skills");
console.log(manager.tasks);

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("doneBtn").addEventListener("click", ()=>{
        completed();
    })
})

function completed(){
    manager.addTasks("Classes", true);
    console.log(manager.tasks);
}