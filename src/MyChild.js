import { useState } from 'react';

const MyChild = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    props.onUpdate();
  }

  return (
    <input type="button" value={count} onClick={increment} />
  )
}

export default MyChild;