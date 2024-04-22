import { useRef } from 'react';

const MyFormUn = () => {
  const name = useRef(null);
  const email = useRef(null);

  const show = () => {
    console.log(`name: ${name.current.value}`);
    console.log(`email: ${email.current.value}`);
  }

  return (
    <form>
      <div>
        <label htmlFor="name">名前:</label>
        <input id="name" name="name" type="text" ref={name} defaultValue="山田太郎" />
      </div>

      <div>
        <label htmlFor="email">メールアドレス:</label>
        <input id="email" name="email" type="mail" ref={email} defaultValue="tyamada@example.com" />
      </div>

      <button type="button" onClick={show}>送信</button>
    </form>
  )
}

export default MyFormUn;