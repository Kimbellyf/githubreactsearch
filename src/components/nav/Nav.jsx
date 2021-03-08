import './Nav.css';
import React from 'react';
import Form from '../form/Form.jsx';
import {Link} from 'react-router-dom';

const Nav = () =>
    <aside className="menu-area">
        <nav className="menu">
            {/*Refatorar */}
            <Link href="#/">
                <i className="fa fa-home">Início</i>
            </Link>
            <Link href="#/users">
                <i className="fa fa-users">Usuários</i>
            </Link>
            <Link>
            <Form
                changeUser={this.changeUser}
                user={user}
                error={error}
                loading={loading}
                buttonAction={this.searchUser}
            />
            </Link>
        </nav>
    </aside>

export default Nav;