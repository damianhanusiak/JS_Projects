const { readFile, writeFile } = require("fs").promises;
const { encryptText } = require("./cipher");
const { hash } = require("./hash");
const { SALT, HASH_SALT } = require("./constants");

const myPath = process.argv[2];
const myPassword = process.argv[3];

(async () => {
	try {
		const content = await readFile(myPath, "utf-8");
		const hashContent = hash(content, HASH_SALT);
		const encryptPassword = await encryptText(content, myPassword, SALT);
		encryptPassword.hash = hashContent;
		await writeFile(myPath, JSON.stringify(encryptPassword), "utf-8");
		console.log("File is encrypted!");
	} catch (err) {
		throw err;
	}
})();
