const myEntries = document.querySelectorAll('.hide-card');
const menu = document.querySelector('.mob-menu');
const button = document.querySelector('.mob-menu-btn');

// Intersection observer used to animate in elements

const options = {
	threshold: 0,
	rootMargin: '-100px',
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		//console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
			//entry.target.classList.add('show');
		}
	});
}, options);

myEntries.forEach((el) => observer.observe(el));

// Function to toggle mob menu on clicking hamburger

button.addEventListener('click', () => {
	menu.classList.toggle('-translate-x-full');
});

// Function to close the mob menu if clicked outside

window.addEventListener('click', function (e) {
	if (!menu.contains(e.target) && !button.contains(e.target) && !menu.classList.contains('-translate-x-full')) {
		menu.classList.add('-translate-x-full');
	}
});
