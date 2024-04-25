import { useSearchParams } from 'react-router-dom';

const MyQueryArticle = () => {
  const [params, setParams] = useSearchParams();
  return (
    <div>No.{params.get('id')}の記事情報です</div>
  );
}

export default MyQueryArticle;