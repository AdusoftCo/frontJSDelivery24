//Autorizacion de Ingreso

// Credenciales
const validUser = "admin";
const validPassword = "cac";

function login(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    if (usuario === validUser && password === validPassword) {
        alert("Login Exitoso !!");
        displayRecords();
    } else {
        alert("Usuario invalido o Password incorrecta!");
    }
}

// Function to display stored data
function displayRecords() {
    const recordsContainer = document.getElementById("recordsContainer");
    recordsContainer.innerHTML = "";

    // Retrieve data from local storage
    const storedData = JSON.parse(localStorage.getItem("contactFormData")) || [];

    if (storedData.length === 0) {
        recordsContainer.textContent = "No hay datos en local storage.";
        return;
    }

    // Creo la tabla
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";

    // Cabezera tabla
    const headers = ["Nombre", "Email", "Mensaje", "Timestamp"];
    const headerRow = document.createElement("tr");
    headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        th.style.border = "1px solid #ddd";
        th.style.padding = "8px";
        th.style.textAlign = "left";
        th.style.backgroundColor = "#f2f2f2";
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Agrego filas a tabla
    storedData.forEach((entry) => {
        const row = document.createElement("tr");

        ["name", "email", "message", "timestamp"].forEach((key) => {
            const td = document.createElement("td");
            td.textContent = entry[key] || "-";
            td.style.border = "1px solid #ddd";
            td.style.padding = "8px";
            row.appendChild(td);
        });

        table.appendChild(row);
    });

    // Añado la tabla al div container
    recordsContainer.appendChild(table);
}