import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import css from './Tile.module.css';

const Tile = ({ events, number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={css.tile} onClick={() => setIsOpen(!isOpen)}>
                <span className={css.number}>{number}</span>
                {events &&
                    events.map(event => (
                        <div className={css.event}>Event name</div>
                    ))}
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    );
};

export default Tile;
