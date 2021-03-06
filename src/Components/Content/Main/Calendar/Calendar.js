import React, { useState } from 'react';
import css from './Calendar.module.css';
import CalendarDateMenu from './DateMenu/CalendarDateMenu';
import Navigation from './Navigation/Navigation';
import TopBar from './TopBar/TopBar';
import Table from './Table/Table';
import monthNames from './months';

const date = new Date();

const Calendar = () => {
    const [month, setMonth] = useState(date.getMonth() + 1);
    const [year, setYear] = useState(date.getFullYear());

    return (
        <div className={css.calendar}>
            <CalendarDateMenu />
            <div className={css.title}>
                <Navigation
                    month={month}
                    year={year}
                    setMonth={setMonth}
                    setYear={setYear}
                    date={date}
                />
                <p className={css.title_name}>{`${
                    monthNames[month - 1]
                } ${year}`}</p>
            </div>
            <div className={css.calendar_table}>
                <TopBar />
                <Table month={month} year={year} date={date} />
            </div>
        </div>
    );
};

export default Calendar;
