var services = document.querySelectorAll(".services-list li .button-services");
var servicesItem = document.querySelectorAll('.service-list-container');

services[0].addEventListener("click", function (evt) {
    evt.preventDefault();
    services[0].classList.add("button-services-active");
    services[1].classList.remove('button-services-active');
    services[2].classList.remove('button-services-active');
    servicesItem[0].classList.remove('hidden');
    servicesItem[1].classList.add('hidden');
    servicesItem[2].classList.add('hidden');
});

services[1].addEventListener("click", function (evt) {
    evt.preventDefault();
    services[1].classList.add("button-services-active");
    services[0].classList.remove('button-services-active');
    services[2].classList.remove('button-services-active');
    servicesItem[1].classList.remove('hidden');
    servicesItem[0].classList.add('hidden');
    servicesItem[2].classList.add('hidden');
});

services[2].addEventListener("click", function (evt) {
    evt.preventDefault();
    services[2].classList.add("button-services-active");
    services[1].classList.remove('button-services-active');
    services[0].classList.remove('button-services-active');
    servicesItem[2].classList.remove('hidden');
    servicesItem[1].classList.add('hidden');
    servicesItem[0].classList.add('hidden');
});
