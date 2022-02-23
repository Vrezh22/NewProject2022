import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import style from './register.module.css'
import { minLength, maxLength, validEmail, isAllValid, isUrlValid } from '../../helpers/validators';

class Registration extends React.Component {
    state = {
        name: {
            isTouched: false,
            isValid: false,
            value: '',
            error: null,
        },
        avatar: {
            isTouched: false,
            isValid: false,
            value: '',
            error: null,
        },
        email: {
            isTouched: false,
            isValid: false,
            value: '',
            error: null,
        },
        password: {
            isTouched: false,
            isValid: false,
            value: '',
            error: null,
        },
        repassword: {
            isTouched: false,
            isValid: false,
            value: '',
            error: null,
        },
    }
    render() {
        const { name, email, password, repassword, avatar } = this.state;
        return (
            <div className={style.registerForm}>
                <h1>REGISTRATION PAGE</h1>
                <Form className={style.formline}>
                    <FormGroup >
                        <span className={name.error ? `${style.validInput} ${style.errorText}` : style.validInput}>{name.error ? name.error : null}</span>
                        <Label for="fullname">Full Name</Label>
                        <Input type="text" name="name" id="fullname" placeholder="Full Name" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                        <span className={avatar.error ? `${style.validInput} ${style.errorText}` : style.validInput}>{avatar.error ? avatar.error : null}</span>
                        <Label for="avatar1">Profile picture</Label>
                        <Input type="text" name="avatar" id="avatar1" placeholder="Image Address" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                        <span className={email.error ? `${style.validInput} ${style.errorText}` : style.validInput}>{email.error ? email.error : null}</span>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                        <span className={password.error ? `${style.validInput} ${style.errorText}` : style.validInput}>{password.error ? password.error : null}</span>
                        <Label for="pass1">Password</Label>
                        <Input type="password" name="password" id="pass1" placeholder="Password" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                        <span className={repassword.error ? `${style.validInput} ${style.errorText}` : style.validInput}>{repassword.error ? repassword.error : null}</span>
                        <Label for="repass">Repassword</Label>
                        <Input type="password" name="repassword" id="repass" placeholder="Repassword" onChange={this.handleOnChange} />
                    </FormGroup>
                    <Button className={style.regBtn} onClick={this.handleOnSubmit}>Registration</Button>
                </Form>
            </div>
        )
    }
    handleOnChange = (event) => {
        event.persist();
        const { name, value } = event.target;
        let isValid = false;
        let error = null;
        switch (name) {
            case 'email': {
                isValid = validEmail(value);
                error = isValid ? null : 'Wrong Email';
                break;
            }
            case 'repassword': {
                isValid = this.state.password.value === value;
                error = isValid ? null : 'Wrong Password Repeated';
                break;
            }
            case 'password':
            case 'name': {
                isValid = minLength(3)(value) && maxLength(20)(value);
                error = isValid ? null : 'It needs to be between 3 and 20';
                break;
            }
            case 'avatar': {
                isValid = isUrlValid(value);
                error = isValid ? null : 'Wrong url of image'
                break;
            }
            default:
                break;
        }
        this.setState((prevState) => ({
            ...prevState,
            [name]: {
                isTouched: true,
                isValid,
                value,
                error
            }
        }))
    }
    handleOnSubmit = (e) => {
        if (isAllValid(this.state)) {
            let users = localStorage.getItem('users')
            users = users ? JSON.parse(users) : [];
            users.push({
                id: Date.now() + this.state.name.value,
                avatar: this.state.avatar.value,
                name: this.state.name.value,
                email: this.state.email.value,
                password: this.state.password.value,
            })
            localStorage.setItem('users', JSON.stringify(users))
            this.props.history.push('/login')
        }
        else {
            console.log('No');
        }
    }
}
export default Registration;