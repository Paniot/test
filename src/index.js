import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/reduxStore';
import StoreContext from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <StoreContext.Provider value={store}>
                <App />
                </StoreContext.Provider>
            </React.StrictMode>
        </BrowserRouter>
    )
};

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)


// state={store.getState()} store={store} dispatch={store.dispatch.bind(store)}