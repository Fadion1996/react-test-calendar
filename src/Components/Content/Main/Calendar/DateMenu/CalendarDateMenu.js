import React, { useState } from 'react';
import css from './CalendarDateMenu.module.css';
import Button from '../Button/Button';
import dateMenu from './dateMenu';

const CalendarDateMenu = () => {
    const [active, setActive] = useState(1);

    return (
        <div className={css.header}>
            <p className={css.title}>Calendar View</p>
            <div className={css.date_menu}>
                {dateMenu.map(item => (
                    <Button
                        item={item}
                        active={active}
                        onClick={e => setActive(e)}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default CalendarDateMenu;
