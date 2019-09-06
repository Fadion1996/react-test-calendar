import React from 'react';
import LeftPanelList from './LeftPanelList';
import { Logo } from '../../Img';

import css from './Left-panel.module.css';

const LeftPanel = () => (
    <div className={css.left_panel}>
        <div className={css.header}>
            <img src={Logo} className={css.logo} alt="Logo" />
        </div>
        <LeftPanelList />
    </div>
);

export default LeftPanel;
