function registrarSentimento(tipo) {
    if (tipo === "login") {
        window.location.href = "peso.html"; 
    } else if (tipo === "registro") {
        window.location.href = "login.html"; 
    }else if (tipo === "notas") {
        window.location.href = "notas.html"; 
    }
}
