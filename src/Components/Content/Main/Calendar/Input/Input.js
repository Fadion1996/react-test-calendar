import React from 'react';
import css from './Input.module.css';

const Input = ({ img, placeholder, onChange, value }) => (
    <div className={css.inputForm}>
        <span className={css.placeholder}>{placeholder}</span>
        <input
            value={value}
            className={css.input}
            onChange={e => onChange(e)}
        />
        {img && <img className={css.image} src={img} alt={placeholder} />}
    </div>
);

export default Input;
