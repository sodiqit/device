var sliderButton = document.querySelectorAll('.slider-btn');
var popular = document.querySelectorAll('.popular-item');

sliderButton[0].addEventListener("click", function (evt) {
    evt.preventDefault();
    popular[0].classList.remove("hidden");
    popular[1].classList.add("hidden");
    popular[2].classList.add("hidden");
});

sliderButton[1].addEventListener("click", function (evt) {
    evt.preventDefault();
    popular[1].classList.remove("hidden");
    popular[0].classList.add("hidden");
    popular[2].classList.add("hidden");
});

sliderButton[2].addEventListener("click", function (evt) {
    evt.preventDefault();
    popular[2].classList.remove("hidden");
    popular[1].classList.add("hidden");
    popular[0].classList.add("hidden");
});
