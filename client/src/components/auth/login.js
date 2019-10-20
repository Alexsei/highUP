import React, { Component } from "react";
import  { Link }from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr><td>Авторизация</td></tr>
                    <tr><td>Логин</td><td><input/></td></tr>
                    <tr><td>Пароль</td><td><input type="password"/></td></tr>
                    <tr><td></td><td> <input type="button" value="Войти"/></td></tr>
                    <tr><td><Link to={"/login"}>Регистрация</Link></td></tr>
                </table>
            </div>
        );
    }
}

