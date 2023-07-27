import { Table } from 'antd';

const PostsTable = ({ posts, columns }) => {

  return (
    <div>
      {posts.length
        ?
        <Table
          columns={columns}
          dataSource={posts}
          rowKey='id'
        />
        :
        <div>
          <h1>Посты не найдены</h1>
        </div>
      }
    </div>
  );
};

export default PostsTable;