function scrollBottom(duration = 250) {
	const formPosition = document.getElementById('app-arrival').getBoundingClientRect().top;
	const $container = document.getElementsByTagName('html')[0];
	const startPosition = window.pageYOffset || document.documentElement.scrollTop;
	let startTime = null;

	function animation (currentTime) {
		if (startTime === null) {
			startTime = currentTime;
		}
		const timeElapsed = currentTime - startTime;
		const run = this.ease(timeElapsed, startPosition, formPosition, duration);
		$container.scrollTo(0, run);
		if (timeElapsed < duration) {
			requestAnimationFrame(animation);
		}
	}

	requestAnimationFrame(animation);
}

function ease(t, b, c, d) {
	t /= d / 2;
	if (t < 1) {
		return c / 2 * t * t + b;
	}
	t--;
	return -c / 2 * (t * (t - 2) - 1) + b;
}

scrollBottom()
