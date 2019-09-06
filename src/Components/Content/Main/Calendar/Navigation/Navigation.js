import React, { useState } from 'react';
import css from './Navigation.module.css';
import Button from '../Button/Button';
import menuNavigation from './menuNavigation';

const Navigation = ({ month, year, setMonth, setYear, date }) => {
    const [active, setActive] = useState(1);

    const handleClick = button => {
        setActive(button);
        switch (button) {
            case 1:
                setMonth(date.getMonth());
                setYear(date.getFullYear());
                break;
            case 2:
                if (month === 1) {
                    setYear(year - 1);
                    setMonth(12);
                } else {
                    setMonth(month - 1);
                }
                break;
            case 3:
                if (month === 12) {
                    setYear(year + 1);
                    setMonth(1);
                } else {
                    setMonth(month + 1);
                }
                break;
            default:
                setMonth(date.getMonth());
                setYear(date.getFullYear());
        }
    };

    return (
        <div className={css.navigation}>
            {menuNavigation.map(item => (
                <Button
                    item={item}
                    active={active}
                    key={item.id}
                    onClick={e => handleClick(e)}
                />
            ))}
        </div>
    );
};

export default Navigation;
