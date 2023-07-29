import { Table } from 'antd';
import TextPagination from '../../utils/TextPagination';
import './PostsTable.css';

const PostsTable = ({ posts, columns }) => {

  return (
    <div>
      {posts.length
        ?
        <Table
          className='posts-table'
          columns={columns}
          dataSource={posts}
          rowKey='id'
          pagination={{
            itemRender: TextPagination,
            position: ['bottomCenter'],
            showSizeChanger: false
          }}
          locale={{
            triggerDesc: 'По убыванию',
            triggerAsc: 'По возрастанию',
            cancelSort: 'Не упорядочивать'
          }}
        />
        :
        <div>
          <h2>Посты не найдены</h2>
        </div>
      }
    </div>
  );
};

export default PostsTable;