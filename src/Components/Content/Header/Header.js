import React from 'react';
import css from './Header.module.css';
import HeaderSearch from './HeaderSearch';
import HeaderMenu from './HeaderMenu';
import HeaderCustomerInfo from './HeaderCustomerInfo';

const Header = () => {
    return (
        <div className={css.header}>
            <HeaderSearch />
            <HeaderMenu />
            <HeaderCustomerInfo />
        </div>
    );
};

export default Header;
