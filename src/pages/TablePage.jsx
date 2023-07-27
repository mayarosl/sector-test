import { useEffect, useMemo, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import PostsTable from '../components/PostsTable';
import PostService from '../api/PostService';
import PostQuery from '../components/PostQuery';
import COLUMNS from '../UI/columns'

const TablePage = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')

  const [
    fetchPosts,
    isPostsLoading,
    postError
  ] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts.data)
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const searchedPosts = useMemo(() => {
    return posts.filter(post => (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) |
      post.body.toLowerCase().includes(searchQuery.toLowerCase())
    ));
  }, [searchQuery, posts]);

  return (
    <div className='App'>
      <PostQuery searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {postError
        && <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading
        ?
        <h1>Посты загружаются...</h1>
        :
        <PostsTable
          posts={searchedPosts}
          columns={COLUMNS}
        />
      }
    </div>
  );
};

export default TablePage;