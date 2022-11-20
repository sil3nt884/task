import React from 'react';

import { App }  from './app'
import * as ReactDOM from 'react-dom/client';

const element = document.getElementById('root')
if(element) {
    const root = ReactDOM.createRoot(element)
    root.render(<App/>)
}
