import { memo } from 'react';
import '../App.css';

const TodoItem = ({ id, title, done = false, chosen = false, deleteTodoItem, updateTodoItem }) => {
  console.log('RENDER TodoItem');
  const updateDoneProp = () => updateTodoItem({ id, done: !done });
  const updateChosenProp = () => updateTodoItem({ id, chosen: !chosen });

  const updateTitleProp = () => {
    const newTitle = prompt('Type new title', title);

    if (!newTitle) {
      alert("Title can't be empty");
      return;
    }

    updateTodoItem({ id, title: newTitle });
  };

  const deleteCurrentTodoItem = () => deleteTodoItem(id);

  return (
    <div className="TodoItem">
      <div className="Square" onClick={updateChosenProp}>
        {chosen ? 'x' : ''}
      </div>
      {done ? <p className="CrossedText">{title}</p> : <p>{title}</p>}
      <div className="Square" onClick={updateDoneProp}>
        {done ? 'v' : ''}
      </div>
      <div className="Square" onClick={updateTitleProp}>
        <p>fix</p>
      </div>
      <div className="Square" onClick={deleteCurrentTodoItem}>
        <p>del</p>
      </div>
    </div>
  );
};

export default memo(TodoItem);
