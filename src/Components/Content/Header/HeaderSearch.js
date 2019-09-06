import React from 'react';
import { Search } from '../../../Img';
import css from './HeaderSearch.module.css';

const HeaderSearch = () => {
    return (
        <div className={css.search}>
            <img className={css.icon} src={Search} alt="Search" />
            <input
                className={css.input}
                placeholder="Search transactions, invoices or help"
            />
        </div>
    );
};

export default HeaderSearch;
