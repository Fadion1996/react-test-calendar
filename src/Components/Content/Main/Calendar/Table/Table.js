import React, { useState, useEffect } from 'react';
import css from './Table.module.css';
import Tile from '../Tile/Tile';
import tableTiles from './tableTiles';

let number = 1;
let prev = 0;
let arrayOfTile = [];

const Table = ({ month, year, date }) => {
    const daysInMonth = () => new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1).getDay();

    useEffect(() => {
        arrayOfTile = [];
        number = 1;
        prev = daysInMonth();
    }, [month]);

    useEffect(() => {
        prev = daysInMonth();
    }, []);

    const createTile = (day, i) => {
        if (daysInMonth() >= number) {
            if (firstDay <= i && daysInMonth() >= number) {
                arrayOfTile.push(
                    <Tile
                        key={day.id}
                        daysInMonth={daysInMonth}
                        number={number}
                    />,
                );
                if (firstDay >= 5 && i === 34) {
                    return arrayOfTile;
                }
                number += 1;
                return null;
            }
            arrayOfTile.unshift(
                <Tile key={day.id} daysInMonth={daysInMonth} number={prev} />,
            );
            prev -= 1;
            return null;
        }
        number = 1;
        arrayOfTile.push(
            <Tile key={day.id} daysInMonth={daysInMonth} number={number} />,
        );
        number += 1;
        return arrayOfTile;
    };

    return (
        <div className={css.table}>
            {tableTiles.map((day, i) => createTile(day, i))}
        </div>
    );
};

export default Table;
