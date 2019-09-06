import React from 'react';
import css from './Table.module.css';
import Tile from '../Tile/Tile';
import tableTiles from './tableTiles';

let number = 0;

const Table = ({ month, year, date }) => {
    const daysInMonth = () => 32 - new Date(year, month, 32).getDate();
    const firstDay = new Date(year, month).getDay();

    const createTile = (day, i) => {
        if (daysInMonth() >= number) {
            if (firstDay < i && daysInMonth() < number) {
                number = 1;
                return (
                    <Tile
                        key={day.id}
                        daysInMonth={daysInMonth}
                        number={number}
                    />
                );
            }
            number += 1;
            return (
                <Tile key={day.id} daysInMonth={daysInMonth} number={number} />
            );
        }
        number = 1;
        return <Tile key={day.id} daysInMonth={daysInMonth} number={number} />;
    };

    return (
        <div className={css.table}>
            {tableTiles.map((day, i) => createTile(day, i))}
        </div>
    );
};

export default Table;
