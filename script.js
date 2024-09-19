function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Borra todo el contenido del display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Borra el último carácter del display
function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

// Añade una fracción en el formato a/b
function appendFraction() {
    let display = document.getElementById("display").value;
    // Inserta la fracción en el formato "a/b"
    if (display) {
        document.getElementById("display").value = display + "/";
    } else {
        document.getElementById("display").value = "1/";
    }
}

// Realiza el cálculo de la expresión en el display
function calculate() {
    let display = document.getElementById("display").value;

    try {
  
        
        // Evalúa la expresión
        let result = eval(display);

        // Verifica si el resultado es un número finito
        if (!isFinite(result)) {
            throw new Error("Resultado no finito");
        }

        // Muestra el resultado en el display
        document.getElementById("display").value = result;
    } catch (error) {
        console.error("Error en el cálculo:", error); // Muestra el error en la consola
        document.getElementById("display").value = "Error";
    }
}