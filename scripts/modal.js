const $form = document.getElementById('form');
const arrivalContent = document.getElementsByClassName('arrival__content')[0].outerHTML;
const $modalContent = document.getElementsByClassName('modal__content')[0];
const $html = document.getElementsByTagName('html')[0];

$modalContent.innerHTML += arrivalContent;

async function formSubmitHandler(e) {
	e.preventDefault();
	const url = location.href + 'php/mail.php';
	const email = e.target[0].value;
	const request = new XMLHttpRequest();
	request.open("POST", url, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.onreadystatechange = function () {
		if (request.readyState === 4 && request.status === 200) {
			var jsonData = JSON.parse(request.response);
			console.log(jsonData);
		}
	};
	var data = JSON.stringify({"email": email});
	request.send(data);

	await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({email})
	})
		.then((res) => {
			console.log(res)
			toggleModal('submit-modal', true);
			toggleModal('form-modal', false);
		})
		.catch(err => console.error(err));
}

function toggleModal(id, bool) {
	const $modal = document.getElementById(id);
	const $modalForm = $modal.getElementsByTagName('form')[0];
	if (bool) { // open modal
		$html.style.overflow = 'hidden';
		$modal.classList.add('modal--show');
		if (id === 'form-modal') {
			$modalForm.addEventListener('submit', formSubmitHandler)
		}
	} else { // close modal
		$html.style.overflow = 'auto';
		$modal.classList.remove('modal--show');
		if (id === 'form-modal') {
			$modalForm.removeEventListener('submit', formSubmitHandler)
		}
	}
}

$form.addEventListener('submit', formSubmitHandler)
