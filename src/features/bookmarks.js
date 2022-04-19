import { createSlice } from '@reduxjs/toolkit'

export const bookmarkSlice = createSlice({
	name: "bookmarks",
	initialState: { bookmarksList: [ ] },
	reducers: {
		addBookmark: (state, action) => {
			state.bookmarksList.push(action.payload);
			console.log('Bookmark added');
		},
		deleteBookmark: (state, action) => {
			state.bookmarksList = state.bookmarksList.filter(bookmark => action.payload === bookmark);
			console.log('Bookmark removed');
		}
	}
})

export const { addBookmark, deleteBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;