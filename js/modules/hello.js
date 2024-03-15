function hello(name = null) {
	if (name !== null) {
		console.log(`Hello, ${name}!`);
	} else {
		console.log("Hello, World!");
	};
};

export { hello as "my-module" };
