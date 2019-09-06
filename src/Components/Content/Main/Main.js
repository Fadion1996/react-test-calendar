import React from 'react';
import css from './Main.module.css';
import Calendar from './Calendar/Calendar';

const Main = () => {
    return (
        <div className={css.main}>
            <p className={css.title}>Calendar</p>
            <Calendar />
        </div>
    );
};

export default Main;
