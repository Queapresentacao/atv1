import React, { useState } from 'react';

function contador_pessoas() {
	const [total, setTotal] = useState(0);
	const [homens, setHomens] = useState(0);
	const [mulheres, setMulheres] = useState(0);

	const AddPerson = (gender) => {
		if (gender === 'homens') {
			setHomens(homens + 1);
			setTotal(total + 1);
		} else if (gender === 'mulheres') {
			setMulheres(mulheres + 1);
			setTotal(total + 1);
		}
	};

	const RemovePerson = (gender) => {
		if (gender === 'homens' && homens > 0) {
			setHomens(homens - 1);
			setTotal(total - 1);
		} else if (gender === 'mulheres' && mulheres > 0) {
			setMulheres(mulheres - 1);
			setTotal(total - 1);
		}
	};

	const Refresh = () => {
		setTotal(0);
		setHomens(0);
		setMulheres(0);
	};

	const isNegative = total < 0;

	return (
		<div className='container'>
			<h1>Total: {total}</h1>
			{isNegative && <p style={{ color: 'blue' }}>O número pessoas não pode ser negativo</p>}
			<div class='buttons-container'>
				
				<h2>Homens: {homens}.</h2>
				<button class="botao" onClick={() => AddPerson('homens')}>+</button>
				<button class="botao" onClick={() => RemovePerson('homens')}>-</button>
			</div>
			<div class='buttons-container'>
				<h2>Mulheres: {mulheres}.</h2>
				<button class="botao" onClick={() => AddPerson('mulheres')}>+</button>
				<button class="botao" onClick={() => RemovePerson('mulheres')}>-</button>
			</div>
			<button className='refresh-button' onClick={Refresh}>Delete</button>
		</div>
	);
}

export default contador_pessoas;