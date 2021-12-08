/* import {getResource} from '../services/requests'; */

const calc = (size, material, options, promocode, result) => {
	const sizeBlock = document.querySelector(size),
			materialBlock = document.querySelector(material),
			optionsBlock = document.querySelector(options),
			promocodeBlock = document.querySelector(promocode),
			resultBlock = document.querySelector(result);
	
	let sum = 0;

	const calcFunc = () => {

		sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

		if (sizeBlock.value == '' || materialBlock.value == '') {
			resultBlock.textContent = 'Выберите размер и материал картины';
		} else if (promocodeBlock.value === 'IWANTPOPART') {
			resultBlock.textContent = Math.round(sum * 0.7);
		} else {
			resultBlock.textContent = sum;
		}
	};

	/* function createOptions(response, target) {
		for (let key in response) {
			let option = document.createElement('option');

			option.innerText = key;
			option.value = response[key];
			target.appendChild(option);
		}
	}

	sizeBlock.addEventListener('click', () => {
		let selectName = sizeBlock.id;
		sizeBlock.innerHTML = '';
		getResource(`http://localhost:3000/${selectName}`)
			.then(res => createOptions(res, sizeBlock));
	}, {'once': true});

	materialBlock.addEventListener('click', () => {
		let selectName = materialBlock.id;
		materialBlock.innerHTML = '';
		getResource(`http://localhost:3000/${selectName}`)
			.then(res => createOptions(res, materialBlock));
	}, {'once': true});

	optionsBlock.addEventListener('click', () => {
		let selectName = optionsBlock.id;
		optionsBlock.innerHTML = '';
		getResource(`http://localhost:3000/${selectName}`)
			.then(res => createOptions(res, optionsBlock));
	}, {'once': true}); */

	sizeBlock.addEventListener('change', calcFunc);
	materialBlock.addEventListener('change', calcFunc);
	optionsBlock.addEventListener('change', calcFunc);
	promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;