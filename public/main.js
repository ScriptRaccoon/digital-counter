const displays = Array.from(document.querySelectorAll(".display"));

let counter = 0;

function update_counter() {
	counter++;
	const str = counter.toString();

	if (str.length > displays.length) {
		counter = 0;
		displays.forEach((display) => display.setAttribute("data-digit", ""));
	}

	for (let index = 0; index < str.length; index++) {
		const char = str.at(-1 - index);
		const display = displays.at(-1 - index);
		display.setAttribute("data-digit", char);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	setInterval(update_counter, 500);
});
