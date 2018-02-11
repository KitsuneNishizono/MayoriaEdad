var edad = parseInt(prompt("¿Qué edad tienes?"));

function edad_cliente(edad){
	if(!edad) return "Sólo se admiten números.";
	if (edad >= 18) return "Puedes entrar a la página";
	else return "Eres muy joven para entrar a la página";
}

alert(edad_cliente(edad));