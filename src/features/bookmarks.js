import { createSlice } from '@reduxjs/toolkit'

export const bookmarkSlice = createSlice({
	name: "bookmarks",
	initialState: { bookmarksList: [ ] },
	reducers: {
		addBookmark: (state, action) => {
			state.bookmarksList.push(action.payload);
		},
		deleteBookmark: (state, action) => {
			state.bookmarksList = state.bookmarksList.filter(bookmark => action.payload !== bookmark.id);
		}
	}
})

export const { addBookmark, deleteBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;