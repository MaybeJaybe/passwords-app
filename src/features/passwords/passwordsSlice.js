import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [
		// { name: 'test', password: 'hello' },
		// { name: 'ABCDEF', password: 'helloPassword'}
	],
}

export const passwordsSlice = createSlice({
	name:'passwords',
	initialState,
	reducers: {
		addPassword: (state, action) => {
			state.value.push(action.payload)
		}
	}
})

export const { addPassword } = passwordsSlice.actions
export default passwordsSlice.reducer