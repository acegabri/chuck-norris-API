let loadJokeButton = document.querySelector("#loadJoke");

loadJokeButton.addEventListener("click", function (e) {
	e.preventDefault();

	function thenCallback(response) {
		console.log("questa è la response del server");
		console.log(response);
		console.log(response.status);

		if (response.status === 200) {
			return response.json();
		}
	}

	function catchCallback(error) {
		console.log(error);
		//document.querySelector("#error").innerHTML = error;
	}

	function finalCallback(data) {
		console.log("questo è l'oggetto JSON restituito");
		console.log(data); //stampa tutto l'oggetto JSON
		console.log(data.value); //stampa solamente il joke che è ciò che a noi
		document.querySelector(".jokeString").innerHTML = data.value;

		// Access an existing link element by ID
		let myLink = document.querySelector("#jokeLink");
		// Set the href attribute of the link
		myLink.href = data.url;
		myLink.innerHTML = data.url;
	}

	fetch("https://api.chucknorris.io/jokes/random")
		.then(thenCallback)
		.then(finalCallback)
		.catch(catchCallback);
});
