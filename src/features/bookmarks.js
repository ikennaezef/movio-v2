import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const bookmarkSlice = createSlice({
	name: "bookmarks",
	initialState: { bookmarksList: [ ] },
	reducers: {
		addBookmark: (state, action) => {
			state.bookmarksList.push(action.payload);
			toast.success('Bookmark added');
		},
		deleteBookmark: (state, action) => {
			state.bookmarksList = state.bookmarksList.filter(bookmark => bookmark.id !== action.payload.id );
			toast.error('Bookmark removed');
		}
	}
})

export const { addBookmark, deleteBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;