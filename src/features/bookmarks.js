import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const bookmarkSlice = createSlice({
	name: "bookmarks",
	initialState: { bookmarksList: [ ] },
	reducers: {
		fillBookmarks: (state, action) => {
			state.bookmarksList = action.payload;
		},
		addBookmark: (state, action) => {
			state.bookmarksList.push(action.payload);
			toast.success('Bookmark added');
			if (localStorage.getItem('savedBookmarks')) {
				let localBookmarks = JSON.parse(localStorage.getItem('savedBookmarks'));
				localBookmarks.push(action.payload);
				localStorage.setItem('savedBookmarks', JSON.stringify(localBookmarks));
			}else {
				let localBookmarks = [];
				localBookmarks.push(action.payload);
				localStorage.setItem('savedBookmarks', JSON.stringify(localBookmarks));
			}
		},
		deleteBookmark: (state, action) => {
			state.bookmarksList = state.bookmarksList.filter(bookmark => bookmark.id !== action.payload.id );
			toast.error('Bookmark removed');
			if (localStorage.getItem('savedBookmarks')) {
				let localBookmarks = JSON.parse(localStorage.getItem('savedBookmarks'));
				localBookmarks = localBookmarks.filter(bookmark => bookmark.id !== action.payload.id);
				localStorage.setItem('savedBookmarks', JSON.stringify(localBookmarks));
			}else {
				let localBookmarks = [];
				localBookmarks = localBookmarks.filter(bookmark => bookmark.id !== action.payload.id);
				localStorage.setItem('savedBookmarks', JSON.stringify(localBookmarks));
			}
		}
	}
})

export const { addBookmark, deleteBookmark, fillBookmarks } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;