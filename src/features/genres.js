import { createSlice } from '@reduxjs/toolkit'

export const genreSlice = createSlice({
	name: "genre",
	initialState: { genre: null },
	reducers: {
		setGenre: (state, action) => {
			state.genre = action.payload
		}
	}
})

export const { setGenre } = genreSlice.actions;

export default genreSlice.reducer;