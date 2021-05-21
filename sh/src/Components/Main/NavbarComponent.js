import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const NavbarComponent = () => {
    return (
        <div className="navbar">
            <div className="navbar-items">
                <ul>
                    <li>
                        <a href="#">Аренда</a>
                    </li>
                    <li>
                        <a href="#">Покупка</a>
                    </li>
                    <li className="add-ad">
                        <AiOutlinePlusCircle className="plus-icon" />
                        <a href="#">Подать обьявление</a>
                    </li>
                </ul>
            </div>
            <div className="authentication-links">
                <a href="#">Регистрация</a>
                <a href="#">Личный кабинет</a>
            </div>
        </div>
    );
};

export default NavbarComponent;
