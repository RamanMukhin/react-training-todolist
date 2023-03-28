import { memo, useCallback } from 'react';
import Button from '../Button/Button';
import TodoItem from '../TodoItem/TodoItem';
import '../App.css';

const Body = ({
  todoList,
  updateTodoItem,
  deleteTodoItem,
  emptyTodoList,
  chooseTodoItems,
  deleteDoneTodoLists,
}) => {
  console.log('Body Render');
  const handleClickAllButton = useCallback(() => chooseTodoItems(), [chooseTodoItems]);
  const handleClickDoneButton = useCallback(() => chooseTodoItems(true, 'done'), [chooseTodoItems]);
  const handleClickTodoButton = useCallback(() => chooseTodoItems(true, 'todo'), [chooseTodoItems]);

  return (
    <>
      <h1>TodoList</h1>

      <div className="App-body">
        <Button className="BlueButton" title="All" onClick={handleClickAllButton} />
        <Button className="BlueButton" title="Done" onClick={handleClickDoneButton} />
        <Button className="BlueButton" title="Todo" onClick={handleClickTodoButton} />
      </div>

      {todoList &&
        todoList.length &&
        todoList.map(({ id, title, done, chosen }) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            done={done}
            chosen={chosen}
            deleteTodoItem={deleteTodoItem}
            updateTodoItem={updateTodoItem}
          />
        ))}

      <div className="App-body">
        <Button className="RedButton" title="Delete done tasks" onClick={deleteDoneTodoLists} />
        <Button className="RedButton" title="Delete all tasks" onClick={emptyTodoList} />
      </div>
    </>
  );
};

export default memo(Body);
