const { createHmac } = require("crypto");

function hash(text, salt) {
	return createHmac("sha512", salt).update(text).digest("hex");
}

module.exports = {
	hash,
};
