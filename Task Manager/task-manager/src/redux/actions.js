import { ADD_TODO, MARK_ALL_COMPLETED,  REMOVE_TODO, FILTER_TODOS, MARK_COMPLETED,
    MARK_INCOMPLETE, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./actionTypes";


export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {text}
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: {id}
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: {id}
});

export const filterTodos = (filter) => ({
    type: FILTER_TODOS,
    payload: {filter}
});

export const markAllCompleted = () => ({
    type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TERM,
    payload: {searchTerm}
})

export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: { id },
  });
  
  export const markIncomplete = (id) => ({
    type: MARK_INCOMPLETE,
    payload: { id },
  });


