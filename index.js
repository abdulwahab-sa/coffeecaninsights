const myEntries = document.querySelectorAll('.hide-card');

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
