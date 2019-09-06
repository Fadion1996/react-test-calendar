import React from 'react';
import Main from './Main/Main';
import Header from './Header/Header';

import css from './Content.module.css';

const Content = () => (
    <div className={css.Content}>
        <Header />
        <Main />
    </div>
);

export default Content;
