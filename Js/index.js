const ham = document.querySelector(".hamburger"),
	navbar = document.querySelector(".navbar");
ham.addEventListener("click", (() => {
	navbar.classList.toggle("display")
})), window.addEventListener("scroll", (() => {
	const e = window.scrollY;
	e > 10 && navbar.classList.remove("display"), ham.style.display = e > 400 ? "none" : "block"
}));
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]'),
	currentTheme = localStorage.getItem("theme");

function switchTheme(e) {
	e.target.checked ? (document.documentElement.setAttribute("data-theme", "dark"), localStorage.setItem("theme", "dark")) : (document.documentElement.setAttribute("data-theme", "light"), localStorage.setItem("theme", "light"))
}
currentTheme && (document.documentElement.setAttribute("data-theme", currentTheme), "dark" === currentTheme && (toggleSwitch.checked = !0)), toggleSwitch.addEventListener("change", switchTheme, !1);
const imgs = document.querySelectorAll(".img"),
	lazyLoad = e => {
		new IntersectionObserver(((e, t) => {
			e.forEach((e => {
				if (e.isIntersecting) {
					const c = e.target,
						r = c.getAttribute("data-src");
					c.setAttribute("src", r), c.classList.add("fade"), t.disconnect()
				}
			}))
		})).observe(e)
	};
imgs.forEach(lazyLoad);
