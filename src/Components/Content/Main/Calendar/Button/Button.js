import React from 'react';
import css from './Button.module.css';

const Button = ({ active, onClick, item: { name, id } }) => (
    <button
        className={active === id ? css.active_button : css.button}
        onClick={() => onClick(id)}
    >
        {name}
    </button>
);

export default Button;
