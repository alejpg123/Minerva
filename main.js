let enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {
    Swal.fire({
        text: "Su consulta ha sido enviada correctamente. Nos contactaremos a la brevedad.",
        icon: "success"
      });
})