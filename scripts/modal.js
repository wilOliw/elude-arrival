const $form = document.getElementById('form');
const arrivalContent = document.getElementsByClassName('arrival__content')[0].outerHTML;
const $modalContent = document.getElementsByClassName('modal__content')[0];
const $html = document.getElementsByTagName('html')[0];

$modalContent.innerHTML += arrivalContent;

function formSubmitHandler(e) {
	e.preventDefault();
	const value = e.target[0].value;
	fetch('../php')
	toggleModal('submit-modal', true);
	toggleModal('form-modal', false);
}

function layoutClickHandler(e) {
	toggleModal(e.path[1].id, false)
}

function toggleModal(id, bool) {
	const $modal = document.getElementById(id);
	const $modalForm = $modal.getElementsByTagName('form')[0];
	$html.style.overflow = bool ? 'hidden' : 'auto';
	if (bool) { // open modal
		console.log(id)
		$modal.classList.add('modal--show');
		if (id === 'form-modal') {
			$modalForm.addEventListener('submit', formSubmitHandler)
		}
	} else { // close modal
		$modal.classList.remove('modal--show');
		if (id === 'form-modal') {
			$modalForm.removeEventListener('submit', formSubmitHandler)
		}
	}
}

$form.addEventListener('submit', formSubmitHandler)
