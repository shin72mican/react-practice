import { useParams } from 'react-router-dom';

const MyArticle = () => {
  const params = useParams();
  return (
    <div>No.{params.id}の記事情報です！</div>
  );
}

export default MyArticle;