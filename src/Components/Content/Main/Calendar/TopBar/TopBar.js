import React from 'react';
import css from './TopBar.module.css';
import topMenu from './topMenu';

const TopBar = () => (
    <div className={css.top_bar}>
        {topMenu.map(item => (
            <div className={css.item} key={item.id}>
                {item.text}
            </div>
        ))}
    </div>
);

export default TopBar;
