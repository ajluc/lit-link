import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

/* Set up Jotai state management */
import { Provider } from 'jotai'

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <Provider>
        <App />
    </Provider>
);