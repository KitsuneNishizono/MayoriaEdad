var edad = parseInt(prompt("¿Qué edad tienes?"));

function edad_cliente(edad){
	if(!edad) return "No es una edad válida";
	if (edad >= 18) return "Puedes entrar a la página";
	else return "Eres muy joven para entrar a la página";
}

alert(edad_cliente(edad));