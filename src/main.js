async function loadComponent(selector, path) {
	const res = await fetch(path);
	const html = await res.text();
	document.querySelector(selector).innerHTML = html;
}

async function init() {
	await loadComponent("#header", "/src/components/header.html");
	await loadComponent("#footer", "/src/components/footer.html");

	$("#burger").on("click", function () {
		$("#overlay").toggleClass("active");
	});

	$("#overlay").on("click", function (e) {
		if (e.target === this) $(this).removeClass("active");
	});
}

init();

import "./scss/main.scss";
import $ from "jquery";

$(document).ready(function () {
	$("#burger").on("click", function () {
		$("#overlay").toggleClass("active");
	});

	// Закрити по overlay
	$("#overlay").on("click", function (e) {
		if (e.target === this) $(this).removeClass("active");
	});
});

const editable = document.getElementById("editable");
const target = document.getElementById("target");

editable.addEventListener("input", function () {
	requestAnimationFrame(() => {
		const text = this.textContent.trim();
		const number = parseInt(text, 10);
		target.style.width = number + "%";
	});
	// cпеціально не перевіряю чи намбер чи
	// шось ще тому шо це не реальний функціонал
});

$(document).ready(function () {
	$("#left").addClass("bright");
	$("#content1").addClass("active");
	$("#right").click(function () {
		$("#highlight").addClass("right");
		$("#left").removeClass("bright");
		$("#right").addClass("bright");

		if ($("#content1").hasClass("active")) {
			$(".active").fadeOut(0, function () {
				$(this).removeClass("active");
			});
			$("#content2").fadeIn(50, function () {
				$(this).addClass("active");
			});
		}
	});
	$("#left").click(function () {
		$("#highlight").removeClass("right");
		$("#right").removeClass("bright");
		$("#left").addClass("bright");

		if ($("#content2").hasClass("active")) {
			$(".active").fadeOut(0, function () {
				$(this).removeClass("active");
			});
			$("#content1").fadeIn(50, function () {
				$(this).addClass("active");
			});
		}
	});
});

const container = document.getElementById("scrollContainer");
const shadow = document.getElementById("shadow");
const contentWidth = container.scrollWidth;
const containerWidth = container.clientWidth;

container.addEventListener("scroll", () => {
	// Якщо скрол до кінця
	if (container.scrollLeft + containerWidth >= contentWidth - 5) {
		shadow.classList.add("at-end");
	} else {
		shadow.classList.remove("at-end");
	}
});
