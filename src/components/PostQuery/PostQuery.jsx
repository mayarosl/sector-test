import { Input } from 'antd';

const { Search } = Input;

const PostQuery = ({ searchQuery, setSearchQuery }) => {

  return (
    <div>
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