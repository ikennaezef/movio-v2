import { createSlice } from '@reduxjs/toolkit';

const initialValue = { genre: '', id: 0 };

export const genreSlice = createSlice({
	name: "genre",
	initialState: { value: initialValue },
	reducers: {
		setGenre: (state, action) => {
			state.value = action.payload;
		},
		resetGenre: (state) => {
			state.value = initialValue;
		}
	}
})

export const { setGenre, resetGenre } = genreSlice.actions;

export default genreSlice.reducer;