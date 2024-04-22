import { useState } from 'react';

const MyState = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <>
      <input type="button" value="カウント" onClick={increment} />
      <p>{count}回、クリックされました。</p>
    </>
  )
}

export default MyState;