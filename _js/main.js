import { switchTheme } from "./modules/themeSwitcher.js";

window.addEventListener("load", () => {
	// Theme Switcher
	const themeSwitcherButton = document.getElementById("theme-switcher");
	themeSwitcherButton.addEventListener("click", switchTheme);
})