import React from 'react';
import css from './Header.module.css';
import HeaderSearch fro './HeaderSearch';

const Header = () => {
    return (
        <div className={css.header}>
            <HeaderSearch/>
        </div>
    );
};

export default Header;
