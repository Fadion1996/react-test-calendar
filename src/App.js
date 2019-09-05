import React from 'react';
import { Content, LeftPanel } from './Components';

import css from './App.module.css';

function App() {
    return (
        <div className={css.App}>
            <LeftPanel />
            <Content />
        </div>
    );
}

export default App;
