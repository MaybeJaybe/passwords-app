import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPassword } from './features/passwords/passwordsSlice';
import PasswordsList from './PasswordsList';
import zxcvbn from 'zxcvbn';
import './password.css';

function generatePassword() {
	console.log('generating password')
	// for (let i = 33; i < 127; i ++) {
	// 	console.log(i, String.fromCharCode(i))
	// }
	let randomPassword = '';
	for (let i = 0; i < 9; i ++) {
		const randomChar = Math.floor(Math.random() * (127 - 33) + 33);
		const chars = String.fromCharCode(randomChar);
		randomPassword += chars;
	}
	return randomPassword
}

function Password() {
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const savePassword = () => {
		if (name && password) {
			dispatch(addPassword({ name, password }))
			setPassword('')
			setName('')
		}
	}

	// const testStrength()zxcvbn('Tr0ub4dour&3')

	return (
		<div className="Password">
			<form>
				<div className="input-name">
					<label for="name">Name:</label>
					<input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name} required/>
				</div>
				<div className="input-password">
					<label for="password">Password:</label>
					<input type="text" id="password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
				</div>
			</form>
			<div className="score">password score: {`${zxcvbn(password).score}/4`}</div>
			{/* <div>possibility of being guessed: {`${zxcvbn(password).guesses}`}</div> */}
			<div>
				<button className='button' onClick={(e) => {
					setPassword(generatePassword())
				}}>Generate</button>
				<button className='button' onClick={savePassword}>Save</button>
			</div>
			<div>Saved Passwords: <PasswordsList /></div>
		</div>
	)
}

export default Password