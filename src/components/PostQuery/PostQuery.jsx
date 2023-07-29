import { Input } from 'antd';
import './PostQuery.css'

const { Search } = Input;

const PostQuery = ({ searchQuery, setSearchQuery }) => {

  return (
    <div className='searchQuery-container'>
      <Search
        placeholder='Поиск'
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
        allowClear
      />
    </div>
  );
};

export default PostQuery;