let loadJokeButton = document.querySelector(".loadJokeButton");
let form = document.querySelector("#jokeForm");

let categories = [
	"animal",
	"career",
	"celebrity",
	"dev",
	"explicit",
	"fashion",
	"food",
	"history",
	"money",
	"movie",
	"music",
	"political",
	"religion",
	"science",
	"sport",
	"travel",
];

form.addEventListener("submit", function (e) {
	e.preventDefault();

	let currentCategory = document.querySelector("select[name=jokeTypes]").value;
	//console.log(`categoria -> ${currentCategory}`);
	let url = "https://api.chucknorris.io/jokes/random";

	if (currentCategory != "") {
		url += `?category=${currentCategory}`;
	}

	function thenCallback(response) {
		/*console.log("questa è la response del server");
		console.log(response);
		console.log(response.status);*/

		if (response.status === 200) {
			return response.json();
		}
	}

	function catchCallback(error) {
		console.log(error);
		//document.querySelector("#error").innerHTML = error;
	}

	function finalCallback(data) {
		
		/*
		
		console.log("questo è l'oggetto JSON restituito");
		console.log(data); //stampa tutto l'oggetto JSON
		console.log(data.value); //stampa solamente il joke che è ciò che a noi interessa
		

		console.log(`categoria del joke stampato`);
		*/

		data.categories = currentCategory;
		console.log(data);
		document.querySelector(".jokeString").innerHTML = data.value;

		let myLink = document.querySelector("#jokeLink");

		myLink.href = data.url;
		myLink.innerHTML = data.url;
	}

	fetch(url).then(thenCallback).then(finalCallback).catch(catchCallback);
});
