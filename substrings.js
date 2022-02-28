const span = document.querySelector("span");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", solve);

function solve(e) {
	ul.innerHTML = "";
	let text = span.innerHTML;
	sub0(text);
	for (let ib = 2; ib <= text.length; ib++) {
		sub(text, ib);
	}
}

function sub0(text) {
	console.log(text);
	for (let i = 0; i < text.length; i++) {
		console.log("> " + text.charAt(i));
		addNewLi(text.charAt(i));
	}
}

function sub(text, ib) {
	let ia = 0;
	while (ib <= text.length) {
		console.log("> " + text.substring(ia, ib));
		addNewLi(text.substring(ia, ib));
		ia++;
		ib++;
	}
}

function addNewLi(someText) {
	var li = document.createElement("li");
	var hr = document.createElement("hr");
	li.appendChild(document.createTextNode(someText));
	ul.appendChild(li);
	ul.appendChild(hr);
}
