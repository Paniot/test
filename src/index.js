import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/reduxStore';


const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={store.getState()} store={store} dispatch={store.dispatch.bind(store)} />
            </React.StrictMode>
        </BrowserRouter>
    )
};

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
