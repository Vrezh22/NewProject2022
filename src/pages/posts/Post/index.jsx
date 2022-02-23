import React from 'react';
import EditPageModal from '../EditPageModal';
const Post = ({
    post,
    handleDelete,
    closeEditPost,
    openEditPost,
    editPost
}) => {

    const { isOpen, postId } = editPost;

    return (
        <>
            <div className="full">
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src={post.img} alt="pic" />
                            <span className="card-title">{post.title}</span>
                        </div>
                        <div className="card-content">
                            <p className="par">{post.body}</p>
                            <button
                                className="btn red"
                                style={{ marginBottom: "15px" }}
                                onClick={() => handleDelete(post.id)}
                            >
                                DELETE
                        </button>
                            <button
                                className="btn blue"
                                style={{ marginBottom: "15px" }}
                                onClick={() => openEditPost(post.id)}
                            >
                                EDIT
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            {
                isOpen && postId === post.id && <EditPageModal post={post }closeEditPost={closeEditPost}/>
            }
        </>
    )
}
export default Post;