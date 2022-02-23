import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import style from '../registration/register.module.css'
import { repeatEmail } from '../../helpers/validators';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        error: null
    }
    render() {
        return (
            <div className={style.registerForm}>
                <h1>LOGIN PAGE</h1>
                <span className={this.state.error ? `${style.validInput} ${style.errorText}` : style.validInput}>{this.state.error ? this.state.error : null}</span>
                <Form className={style.formline}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pass1">Password</Label>
                        <Input type="password" name="password" id="pass1" placeholder="Password" onChange={this.handleOnChange} />
                    </FormGroup>
                    <Button className={style.regBtn} onClick={this.handleOnSubmit}>Login</Button>
                </Form>
            </div>
        )
    }
    handleOnChange = (event) => {
        event.persist();
        const { name, value } = event.target;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    handleOnSubmit = (e) => {
        const { email, password } = this.state
        const candidate = repeatEmail(email)
        if (candidate) {
            if (password === candidate.password) {
                localStorage.setItem('isAuth', JSON.stringify(true))
                localStorage.setItem('activeUser',JSON.stringify(candidate))
                this.props.history.push('/')
            }
            else {
                this.setState((prevState) => ({
                    ...prevState,
                    error: 'Wrong Password written',
                }))
                localStorage.setItem('isAuth', JSON.stringify(false))
            }
        }
        else {
            this.setState((prevState) => ({
                ...prevState,
                error: 'Wrong Email address'
            }))
            localStorage.setItem('isAuth', JSON.stringify(false))
        }
    }
}
export default Login;




