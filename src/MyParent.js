import { useState } from 'react';
import MyChild from './MyChild';

const MyParent = () => {
  const [sum, setSum] = useState(0);

  const update = () => {
    setSum(sum + 1);
  }

  return (
    <>
      <MyChild onUpdate={update} />
      <MyChild onUpdate={update} />
      <p>現在のカウント合計: {sum}</p>
    </>
  )
}

export default MyParent;