import React from 'react';
import icons from '../../../Img';
import css from './HeaderSearch.module.css';

const HeaderSearch = () => {
    return (
        <div className={css.search}>
            <input
                className={css.input}
                placeholder="Search transactions, invoices or help"
            />
            <img src={icons.Search} alt="Search" />
        </div>
    );
};

export default HeaderSearch;
