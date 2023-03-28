import { useState, useCallback } from 'react';
import './App.css';

import Header from './Header/Header'
import Body from './Body/Body';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: Date.now(),
      title: 'Learn React',
      done: false,
      chosen: false,
    }
  ]);

  const isDefined = (value) => value !== undefined

  const addTodoItem = (title, done = false, chosen = false) => {
    setTodoList((current) => [
      ...current,
      {
        id: Date.now(),
        title,
        done,
        chosen,
      }
    ])
  };

  const deleteTodoItem = useCallback(
    (id) => {
      setTodoList((current) => current.filter(({ id: itemId }) => id !== itemId));
    },
    [],
  );

  const chooseTodoItems = useCallback(
    (filter = false, key = '') => {
      let condition;

      if (filter && key) {
        condition = {
          done: true,
          todo: false,
        }[key];
      }

      return setTodoList((current) => current.map(
        (item) => isDefined(condition)
          ? item.done === condition
            ? { ...item, chosen: true }
            : item
          : { ...item, chosen: true }
      ));
    },
    [],
  );


  const updateTodoItem = useCallback(
    ({ id, title, done, chosen }) => {
      setTodoList((current) => current.map(
        (it) => it.id === id
          ? {
            id,
            title: isDefined(title) ? title : it.title,
            done: isDefined(done) ? done : it.done,
            chosen: isDefined(chosen) ? chosen : it.chosen,
          }
          : it
      ));
    },
    []
  );

  const deleteDoneTodoLists = useCallback(
    () => setTodoList(
      (current) => current.some((it) => it.done) ? current.filter(({ done }) => !done) : current),
    [],
  );


  const emptyTodoList = useCallback(
    () => setTodoList((current) => current.length ? [] : current),
    [],
  );


  return (
    <div className="App">
      <h1>TodoInput</h1>

      <Header addTodoItem={addTodoItem} />
      <Body
        todoList={todoList}
        updateTodoItem={updateTodoItem}
        deleteTodoItem={deleteTodoItem}
        emptyTodoList={emptyTodoList}
        chooseTodoItems={chooseTodoItems}
        deleteDoneTodoLists={deleteDoneTodoLists}
      />

    </div>
  );
}

export default App;
