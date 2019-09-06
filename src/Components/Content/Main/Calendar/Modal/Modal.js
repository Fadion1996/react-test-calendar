import React, { useState } from 'react';
import css from './Modal.module.css';
import Input from '../Input/Input';
import { Calendar, Timer, Close } from '../../../../../Img';

const Modal = ({ setIsOpen }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [notes, setNotes] = useState('');

    return (
        <div className={css.modal}>
            <img
                className={css.close}
                src={Close}
                onClick={() => setIsOpen(false)}
                alt="close"
            />
            <Input
                onChange={e => setName(e.target.value)}
                value={name}
                placeholder="event name"
            />
            <Input
                onChange={e => setDate(e.target.value)}
                value={date}
                img={Calendar}
                placeholder="event date"
            />
            <Input
                onChange={e => setTime(e.target.value)}
                value={time}
                img={Timer}
                placeholder="event time"
            />
            <Input
                onChange={e => setNotes(e.target.value)}
                value={notes}
                placeholder="notes"
            />
            <div className={css.buttons}>
                <button className={css.cancel} onClick={() => setIsOpen(false)}>
                    Cancel
                </button>
                <button className={css.save}>Save</button>
            </div>
        </div>
    );
};

export default Modal;
