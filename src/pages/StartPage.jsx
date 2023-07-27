import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/table')}>
        К таблице
      </button>
    </div>
  );
};

export default StartPage;