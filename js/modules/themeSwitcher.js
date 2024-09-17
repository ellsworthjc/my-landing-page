/**
 * Handles theme switching for the site.
 * - In this context, "this" is the theme switcher button.
 */
export function switchTheme() {
	const themes = ["light", "dark", "silly"];
	const body = document.querySelector("body");

	themes.some((theme, index, array) => {
		const nextTheme = array[index + 1] || array[0];
		if (body.classList.contains(theme)) {
			body.classList.replace(theme, nextTheme);
			return true;
		}
	})

	// We'll want to add some icons to the theme switcher button eventually
	// console.log(this);
}
