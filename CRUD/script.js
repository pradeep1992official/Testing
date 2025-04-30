// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("dataForm");
    const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const rowData = Array.from(formData.values());

        // Create a new row
        const newRow = table.insertRow();

        // Add cells to the row
        rowData.forEach((data) => {
            const cell = newRow.insertCell();
            cell.textContent = data;
        });

        // Add a delete button
        const deleteCell = newRow.insertCell();
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            table.deleteRow(newRow.rowIndex - 1);
        });
        deleteCell.appendChild(deleteButton);

        // Reset the form
        form.reset();
    });
});