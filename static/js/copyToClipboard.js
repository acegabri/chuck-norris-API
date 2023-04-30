let copyButton = document.querySelector(".copyButton");

copyButton.addEventListener("click", function (e) {
	e.preventDefault();
	// Ottieni il paragrafo
	let paragraph = document.querySelector("p");
	// Crea un elemento temporaneo textarea
	let el = document.createElement("textarea");
	// Imposta il valore della textarea al contenuto del paragrafo
	el.value = paragraph.textContent;
	// Rendi la textarea nascosta dalla vista
	el.style.position = "absolute";
	el.style.left = "-9999px";
	// Aggiungi la textarea al documento
	document.body.appendChild(el);
	// Seleziona il contenuto della textarea
	el.select();
	// Copia il contenuto selezionato nella clipboard
	document.execCommand("copy");
	// Rimuovi l'elemento temporaneo textarea
	document.body.removeChild(el);
});
