const { readFile, writeFile } = require("fs").promises;
const { decryptText } = require("./cipher");
const { hash } = require("./hash");

const { SALT, HASH_SALT } = require("./constants");

const myPath = process.argv[2];
const myPassword = process.argv[3];

(async () => {
	try {
		const json = await readFile(myPath, "utf-8");
		const encrypted = JSON.parse(json);

		const decryptedPassword = await decryptText(
			encrypted.encrypted,
			myPassword,
			SALT,
			encrypted.iv
		);
		const decryptedHash = hash(decryptedPassword, HASH_SALT);

		if (decryptedHash === encrypted.hash) {
			await writeFile(myPath, decryptedPassword, "utf-8");
		} else {
			console.error("File is not original!");
		}
	} catch (err) {
		throw err;
	}
})();
