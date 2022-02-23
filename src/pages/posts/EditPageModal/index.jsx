import React from 'react';
import ReactDOM from 'react-dom';
import style from './modale.module.css';
import NewPostForm from '../NewPostForm';

const EditPageModal = ({ post, handleEdit ,closeEditPost }) => {
    return (
        ReactDOM.createPortal(
            <div className={style.editPageModal}>
                <i className={`fa fa-times ${style.close}`} onClick={closeEditPost}></i>
                <NewPostForm
                values={post}
                handleEdit={handleEdit}

            />
            </div>,
            document.getElementById('portal')
        )
    )
}

export default EditPageModal;