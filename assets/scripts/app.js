const Portfolio = (function () {
	function makeWords() {
		var words = [
			{
				text: "Visionary",
				weight: 12.3,
			},
			{
				text: "CSS3",
				weight: 8,
			},
			{
				text: "enterpreneur",
				weight: 14,
			},
			{
				text: "jquery",
				weight: 4,
			},
			{
				text: "programming",
				weight: 7,
			},
			{
				text: "python",
				weight: 10,
			},
			{
				text: "java",
				weight: 9,
			},
			{
				text: "quantum",
				weight: 15,
			},
			{
				text: "coder",
				weight: 7,
			},
		];
		return words;
	}

	function makeWordCloud(words) {
		$(".teaching-domains").jQCloud(words, { delay: 120 });
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on("scroll", function () {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.",
				"am founder of Portala.",
				"love to code",
				"am Enthusiastic Coder!.",
			],
			stringsElement: null,
			typeSpeed: 1,
			contentType: "text",
			callback: function () {
				$("#writing-text").css({
					color: "#fff",
					"background-color": "#C8412B",
				});
			},
			preStringTyped: function () {},
			onStringTyped: function () {},
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation,
	};
})();

var ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
	// After document is ready
	// Lozad Initialization
	const observer = lozad(".lozad", {
		rootMargin: "500px 0px",
		threshold: 0.1,
		load: function (el) {
			el.src = el.dataset.src;
		},
	});
	observer.observe();

	// Display words
	Portfolio.displayWordCloud();
	Portfolio.typeAnimation();
});
