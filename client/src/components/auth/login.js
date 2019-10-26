import React, { Component } from "react";
import './login.css';
import { Button , InputGroup, FormControl, Form } from 'react-bootstrap';

export default class Login extends Component {
    render() {
        return (
            <div className="Login_div ">
                <InputGroup className="mb-3 ">
                    <InputGroup.Prepend>
                        <InputGroup.Text className="InputGroup_text">Логин</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl  placeholder="Введите логин" />
                </InputGroup >
                <InputGroup className="mb-3 ">
                    <InputGroup.Prepend>
                        <InputGroup.Text className="InputGroup_text">Пароль</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="password" placeholder="Введите пароль" />
                </InputGroup>
                <div>
                    <Button variant="success">Войти</Button>
                    <Button href={"/auth/login"}>Регистрация</Button>
                </div>
            </div>
        );
    }
}

