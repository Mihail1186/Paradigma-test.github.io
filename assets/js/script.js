$(document).ready(function () {
	// $("input[type='tel']").mask("+38-999-999-99-99");
	// $(".phone-mask").mask("+38-999-999-99-99");

	$('.fancy-class').fancybox({
		buttons: [
			'slideShow',
			'zoom',
			'fullScreen',
			'close'
		],
		animationEffect: "zoom-in-out",
		animationDuration: 600,
		transitionEffect: "circular",
		transitionDuration: 420,
	});


	$(".hero-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		nextArrow: '<button class="arrows slideNext"><img src="assets/images/arrn.png" alt=""></button>',
		prevArrow: '<button class="arrows slidePrev"><img src="assets/images/arrp.png" alt=""></button>',
		responsive: [
			{
				breakpoint: 577,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});

})




;
const modalOpen = document.querySelectorAll("[data-modal-button]");
const modalClose = document.querySelectorAll("[data-modal-close]");
const fadeClose = document.querySelectorAll('.fade__block');
// const videos = document.querySelectorAll('iframe');


// Ищем модальные окна по метаду dataset и id, даем класс show
modalOpen.forEach(function (item) {
	item.addEventListener('click', function () {
		body.classList.add('_lock-scroll');
		// Ищем кнопку по атрибуту dataset 
		const modalId = this.dataset.modalButton;

		// Ищем модальное окно по атрибуту кнопки, что мы нашли, и по id 
		const modal = document.querySelector('#' + modalId);

		modal.classList.add('show');

		// Находим внутри открытой модалки блок .modal-window и запрещаем ему передавать событие клик "наверх", его родителю 
		modal.querySelector('.modal__window').addEventListener('click', function (e) {
			e.stopPropagation();
		});
	})
});


// Закрываем открытые модальные окна по кнопкам
modalClose.forEach(function (item) {
	item.addEventListener('click', function () {
		body.classList.remove('_lock-scroll');
		// Ищем всех родителей с классом .fade__block
		const modal = this.closest('.fade__block');

		// убираем у класса .fade__block класс show
		modal.classList.remove('show');
	});
});


// Закрываем открытые модальные окна по фэйду
fadeClose.forEach(function (item) {
	item.addEventListener('click', function () {
		body.classList.remove('_lock-scroll');
		this.classList.remove('show');
	});
});








// const modalWindowOne = document.getElementById('modal-1');
// const modalWindowTwo = document.getElementById('modal-2');



// modalOpenOne.addEventListener('click', function () {
//    modalWindowOne.classList.add('show');
// });
// modalOpenTwo.addEventListener('click', function () {
//    modalWindowTwo.classList.add('show');
// });


// modalClose.addEventListener('click', function () {
//    modalWindowOne.classList.remove('show');

// });

// modalWindowOne.addEventListener('click', function () {
//    this.querySelector('.modal-window').addEventListener('click', function (e) {
//       e.stopPropagation();
//    });

//    this.classList.remove('show');
// });






;

const body = document.body;
const menuBtn = document.querySelector('.burger');
const menuBody = document.querySelector('.header__nav');



menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('_active');
	menuBody.classList.toggle('_active');
	body.classList.toggle('_lock');
});

