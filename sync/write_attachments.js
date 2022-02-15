let fs = require("fs");

const process = (dir, func) => {
	if (!fs.existsSync(dir)) {
		fs.writeFileSync(dir, JSON.stringify(func({})));
		return;
	}

	let data = JSON.parse(fs.readFileSync(dir));
	data = func(data) || data;

	fs.writeFileSync(dir, JSON.stringify(data));
};

process("./times.json", (data) => {
	data.attachments = new Date().toString();
});

process("./attachments.json", (data) => {
	for (const index in data) {
		let element = data[index];

		console.log("processing class", element.name, index);
		for (const index in element.attachments) {
			let attachment = element.attachments[index];
			let fixed_index = index.replace("/", "|");

			// write properties.json
			if (!fs.existsSync(`../attachment/${fixed_index}`)) fs.mkdirSync(`../attachment/${fixed_index}`);
			process(`../attachment/${fixed_index}/properties.json`, (data) => {
				return attachment;
			});

			// adjust index.json
			process(`../attachment/${fixed_index}/index.json`, (data) => {
				let new_data = {
					title: attachment.name,
					subtitle: data ? data.subtitle : "No description",
					class: element.name,
				};

				return new_data;
			});
		}
	}
});

// json_data.forEach(element => {
//     fs.mkdirSync("../attachment/e")
// })
