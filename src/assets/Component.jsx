import { useState } from 'react';

function Component(props) {
  const data = props.data;
  const { name, age } = data;

  const [click, setClick] = useState(0);
  return (
    <>
      <p>Aku {name}</p>
      <p>Umur {age}</p>

      <p>{click}</p>
      <button onClick={() => setClick( click + 1 )}> Klik </button>
    </>
  )
}

export default Component;
