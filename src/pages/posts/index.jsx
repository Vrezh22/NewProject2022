import React from 'react';
import { PostsContext } from '../../context/contexts';
import NewPostForm from './NewPostForm';
import Post from './Post';
const Posts = (props) => {
  return (
    <PostsContext.Consumer>{
      context => {
        const posts = context.posts;
        const mapPosts = posts.map(post => {
          return <Post
            post={post}
            handleDelete={context.handleDelete}
            key={post.id}
            closeEditPost={context.closeEditPost}
            openEditPost={context.openEditPost}
            editPost={context.editPost}
          />
        })

        return (
          <div className="hop">
            <h1>POSTS PAGE</h1>
            <NewPostForm addPost={context.addPost} />
            {mapPosts}
          </div>
        )
      }
    }
    </PostsContext.Consumer>
  )
}
export default Posts;