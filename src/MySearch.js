import { useParams } from 'react-router-dom';

const MySearch = () => {
  const params = useParams();
  return (
    <div>キーワードは{params['*']}です！</div>
  );
}

export default MySearch;