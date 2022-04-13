import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
	name: "todos",
	initialState: { todoList: [ ] },
	reducers: {
		addTodo: (state, action) => {
			state.todoList.push(action.payload);
		},
		setDone: (state, action) => {
			state.todoList.forEach(todo => {
				if (action.payload === todo.id) {
					todo.done = !todo.done;
				}
			})
		},
		deleteTodo: (state, action) => {
			state.todoList = state.todoList.filter(todo => action.payload !== todo.id);
		}
	}
})

export const { addTodo, setDone, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;