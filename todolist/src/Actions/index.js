export const addTodo = (todo) => {
  console.log('hey',todo)
  return {
    type: 'ADD_TODO',
    payload: todo,
  };
};
