const panels = document.querySelectorAll(".panel");

function toggleOpen() {
	console.log("Hello");
	this.classList.toggle("open");
}

function toggleActive(e) {
	if (e.propertyName.includes("flex")) {
		this.classList.toggle("open-active");
	}
}

// Looping over each of the panels, listening for a click on each one of them, then running the toggle function
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

// Listening for transition end event and toggling class of open-active with function toggleActive
panels.forEach((panel) =>
	panel.addEventListener("transitionend", toggleActive),
);
