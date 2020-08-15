const $form = document.getElementById('form');
const arrivalContent = document.getElementsByClassName('arrival__content')[0].outerHTML;
const $modalContent = document.getElementsByClassName('modal__content')[0];
const $html = document.getElementsByTagName('html')[0];

$modalContent.innerHTML += arrivalContent;

async function formSubmitHandler(e) {
	e.preventDefault();
	const email = e.target[0].value;
	await fetch(location.origin + '/php/mail.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({email})
	})
		.then(() => {
			toggleModal('submit-modal', true);
			toggleModal('form-modal', false);
		})
		.catch(err => alert(err));
}

function layoutClickHandler(e) {
	toggleModal(e.path[1].id, false)
}

function toggleModal(id, bool) {
	const $modal = document.getElementById(id);
	const $modalForm = $modal.getElementsByTagName('form')[0];
	$html.style.overflow = bool ? 'hidden' : 'auto';
	if (bool) { // open modal
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
