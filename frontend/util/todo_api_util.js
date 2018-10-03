
export const fetchTodos = () => (
  $.ajax({
    url: '/api/todos',
    method: 'GET'
  })
);

export const createTodo = (todo) => {
    return (
      $.ajax({
        url: '/api/todos',
        method: 'POST',
        data: {
          todo
        }
      })
    );

};

export const updateTodo = (todo) => {
  return (
    $.ajax({
      url: `/api/todos/${todo.id}`,
      method: 'PATCH',
      data: {
        todo
      }
    })
  );
};

export const removeTodo = (todo) => {
  return (
    $.ajax({
      url: `/api/todos/${todo.id}`,
      method: 'DELETE'
    })
  );
};
