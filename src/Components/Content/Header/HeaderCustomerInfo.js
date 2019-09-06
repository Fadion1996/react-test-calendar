import React from 'react';
import css from './HeaderCustomerInfo.module.css';
import { Avatar, Arrow } from '../../../Img';

const HeaderCustomerInfo = () => {
    return (
        <div className={css.info}>
            <span className={css.name}>John Doe</span>
            <img className={css.arrow} src={Arrow} alt="Dropdown" />
            <img className={css.user} src={Avatar} alt="User" />
        </div>
    );
};

export default HeaderCustomerInfo;
