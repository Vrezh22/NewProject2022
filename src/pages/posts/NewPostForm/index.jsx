import React from 'react';
import style from './newPostForm.module.css';

class NewPostForm extends React.Component {
    state = {
        img: {
            isValid: true,
            isTouched: true,
            value: this.props.values ? this.props.values.img : ''
        },
        title: {
            isValid: true,
            isTouched: true,
            value: this.props.values ? this.props.values.title : ''
        },
        body: {
            isValid: true,
            isTouched: true,
            value: this.props.values ? this.props.values.body : ''
        }
    }
    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            [name]: {
                isValid: true,
                isTouched: true,
                value
            }
        })
    }
    handleAdd = (e) => {
        const { img, title, body } = this.state;
        e.preventDefault();
        this.props.addPost(img.value, title.value, body.value);
        this.setState({
            img: {
                isValid: true,
                isTouched: true,
                value: ''
            },
            title: {
                isValid: true,
                isTouched: true,
                value: ''
            },
            body: {
                isValid: true,
                isTouched: true,
                value: ''
            }
        })

    }
    handleEdit = (e) => {
        const { img, title, body } = this.state;
        e.preventDefault();
        this.props.fullyEdit(img.value, title.value, body.value);
        this.setState({
            img: {
                isValid: true,
                isTouched: true,
                value: ''
            },
            title: {
                isValid: true,
                isTouched: true,
                value: ''
            },
            body: {
                isValid: true,
                isTouched: true,
                value: ''
            }
        })
    }
    render() {

        return (
            <div className={style.postForm}>
                <h4 className={style.header4}>ADD POST</h4>
                <form className={style.form} >
                    <input type="text" name="img" placeholder="Image URL address" onChange={this.handleChange} value={this.state.img.value} />
                    <input type="text" name="title" placeholder="Write Post title" onChange={this.handleChange} value={this.state.title.value} />
                    <input type="text" name="body" placeholder="Write Post" onChange={this.handleChange} value={this.state.body.value} />
                    <button
                        type="submit"
                        className="btn"
                        onClick={this.props.addPost ? this.handleAdd : this.handleEdit}
                    >
                        ADD POST
                    </button>
                </form>
            </div>
        )
    }
}

export default NewPostForm;