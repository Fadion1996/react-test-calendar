import React from 'react';
import css from './HeaderMenu.module.css';
import * as icons from '../../../Img';

import menuHeader from './menuHeader';

const HeaderMenu = () => {
    return (
        <div className={css.menu}>
            {menuHeader.map(item => (
                <img
                    className={css.menuItem}
                    src={icons[item.icon]}
                    alt={item.icon}
                    key={item.id}
                />
            ))}
        </div>
    );
};

export default HeaderMenu;
