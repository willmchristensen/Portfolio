import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalProvider, Modal } from './context/Modal';


function Root(){
    return(
        <ModalProvider>
            <App />
            <Modal />
        </ModalProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Root />
);
