import { useNavigate } from 'react-router-dom';
import classes from './StartPage.module.css'

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <button
        className={classes.btn}
        onClick={() => navigate('/table')}>
        К таблице
      </button>
    </div>
  );
};

export default StartPage;