console.log('scripts added to page.')

const $form = document.getElementById('form');
const $input = document.getElementsByClassName('arrival__form-input')[0];

function formSubmitHandler(e) {
	e.preventDefault();
	const { value } = $input;
	console.log(value)
}

$form.addEventListener('submit', formSubmitHandler)
