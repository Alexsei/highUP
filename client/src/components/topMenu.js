import React, { Component } from "react";
import { Nav, } from "react-bootstrap";
import './topMenu.css'

export default class TopMenu extends Component {
    render() {
        return (
            <div className='topMenu_div'>
                <Nav   variant="pills" className="justify-content-center" >
                    <Nav.Item>
                        <Nav.Link  href="/">Главная</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link    href="/auth/login">Вход</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link    href="/weather" >Погода</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

