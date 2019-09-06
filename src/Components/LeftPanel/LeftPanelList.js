import React, { useState } from 'react';
import css from './Left-panel-list.module.css';
import * as images from '../../Img';

import menu from './menu';

const LeftPanelList = () => {
    const [active, setActive] = useState(7);

    return (
        <ul className={css.left_panel_list}>
            {menu.map(item => (
                <li
                    className={
                        active === item.id ? css.active : css.left_panel_item
                    }
                    onClick={() => setActive(item.id)}
                    key={item.id}
                >
                    <img
                        className={css.left_panel_icon}
                        src={images[item.icon]}
                        alt={item.name}
                    />
                    <span>{item.name}</span>
                </li>
            ))}
        </ul>
    );
};

export default LeftPanelList;
