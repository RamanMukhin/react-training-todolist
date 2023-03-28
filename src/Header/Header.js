import { useCallback, useState } from 'react';
import Button from '../Button/Button';
import '../App.css';

const Header = ({ addTodoItem }) => {
  const [input, setInput] = useState('');

  const saveAndClear = useCallback(() => {
    if (!input) {
      alert("Title can't be empty");
      return;
    }

    addTodoItem(input);
    setInput('');
  }, [input, addTodoItem]);

  const ifEnter = (e) => {
    // 13 - charcode of Enter button
    if (e.key === 'Enter' || e.keyCode === 13) {
      saveAndClear();
    }
  };

  return (
    <div className="App-header">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyUp={ifEnter}
      />
      <Button className="BlueButton" title="Add new task" onClick={saveAndClear} />
    </div>
  );
};

export default Header;
