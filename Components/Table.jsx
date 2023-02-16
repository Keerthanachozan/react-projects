import React, { useState } from 'react';

function StudentForm(props) {
const [name, setName] = useState('');
const [city, setCity] = useState('');

const changeName = (event) => {
	setName(event.target.value);
};

const changeCity = (event) => {
	setCity(event.target.value);
};

const transferValue = (event) => {
	event.preventDefault();
	const val = {
	name,
	city,
	};
	props.func(val);
	clearState();
};

const clearState = () => {
	setName('');
	setCity('');
};

return (
	<div>
	<label className='name'>Name : </label>
	<input type="text" value={name} onChange={changeName} />
	<label className='city'>City : </label>
	<input type="text" value={city} onChange={changeCity} /><br /><br /><br />
	<button className='click' onClick={transferValue}>Add</button>
	</div>
);
}

export default StudentForm;
