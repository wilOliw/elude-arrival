const $form = document.getElementById('form');
const $input = document.getElementsByClassName('arrival__form-input')[0];
const arrivalContent = document.getElementsByClassName('arrival__content')[0].innerHTML;
const $modal = document.getElementsByClassName('modal')[0];
const $modalContent = document.getElementsByClassName('modal__content')[0];
const $html = document.getElementsByTagName('html')[0];

$modalContent.innerHTML += arrivalContent;

function formSubmitHandler(e) {
	e.preventDefault();
	const {value} = $input;
	alert(value);
}

function toggleModal(bool) {
	$modal.classList.toggle('modal--show')
	$html.style.overflow = bool ? 'hidden' : 'auto';
	if (bool) {
		// open modal
		$modalContent.getElementsByTagName('form')[0].addEventListener('submit', formSubmitHandler)
	} else {
		// close modal
		$modalContent.getElementsByTagName('form')[0].removeEventListener('submit', formSubmitHandler)
	}
}

$form.addEventListener('submit', formSubmitHandler)
