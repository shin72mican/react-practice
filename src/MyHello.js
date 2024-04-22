import { useNavigate } from 'react-router-dom';
// const MyHello = (props) => {
//   return (
//     <div>こんにちは、{props.name}さん</div>
//   );
// }

const MyHello = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  }

  return (
    <>
      <div>Hello, react!</div>
      <button onClick={onClick}>トップページへ</button>
    </>
  );
}

export default MyHello;