import { useSelector } from 'react-redux';
import './passwordsList.css'

function PasswordsList() {
	const passwords = useSelector((state) => state.passwords.value)

	return (
		<ul>
			{passwords.map((password, i) => (
				<li key={`${i}-item`}>Username: {password.name} - Password: {password.password}</li>
			))}
		</ul>
	)
}
export default PasswordsList