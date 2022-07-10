import { useState } from 'react';

const TodoItem = (props) => {
  const { isDone, value } = props;

  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    setDone(!done);
  };

  const handleClickDelete = (e) => {
    e.preventDefault();
    props.onDelete(props.index);
  };
  return (
    <li>
      <input type="checkbox" defaultChecked={isDone} onChange={handleChange} />
      {value}
      {''}
      <button onClick={handleClickDelete}>x</button>
    </li>
  );
};

export default TodoItem;
