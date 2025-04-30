document.getElementById("traditional_Button").addEventListener("click", function() {
    document.getElementById("traditionalOP").innerText = "The this refers to the HTML Buttton Element : " + this.textContent;
})

document.getElementById("arrow_Button").addEventListener("click", () => {
    document.getElementById("arrowOP").innerText = "The this refers to the HTML Window Element : " + this.textContent;
})