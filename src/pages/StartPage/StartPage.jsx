import { useNavigate } from 'react-router-dom';
import './StartPage.css';

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <button
        className='btn'
        onClick={() => navigate('/table')}
      >
        К таблице
      </button>
    </div>
  );
};

export default StartPage;