import { useState } from 'react';

const MyForm = () => {
  const [form, setForm] = useState({
    name: '山田太郎',
    email: 'tyamada@example.com'
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.targetname]: e.target.value
    });
  };

  const show = () => {
    console.log(`name: ${form.name}`);
    console.log(`email: ${form.email}`);
  }

  return (
    <form>
      <div>
        <label htmlFor="name">名前:</label>
        <input id="name" name="name" type="text" onChange={handleChange} value={form.name} />
      </div>

      <div>
        <label htmlFor="email">メールアドレス:</label>
        <input id="email" name="email" type="mail" onChange={handleChange} value={form.email} />
      </div>

      <div>
        <button type="button" onClick={show}>送信</button>
      </div>
    </form>
  );
}

export default MyForm;