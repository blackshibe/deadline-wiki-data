let response = await fetch("https://raw.githubusercontent.com/phunanon/Insitux/master/integrations/Deadline.json");
response.text().then((data) => {
	let parsed = JSON.parse(data);
	let doc = document.getElementById("contents");
	for (i in parsed) {
		doc.innerText += parsed[i];
	}
});
