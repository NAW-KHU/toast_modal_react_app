import React, { useState} from "react";
import { Toast } from '../src/components/Toast';
import { Modal } from "../src/components/Modal";
import './App.css';

function App() {
 
    const [showToast, setShowToast] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');

    const showToastMessage = (message, timeout) => {
      
        
           setMessage(message);
           setShowToast(true);
           clearTimeout(() => {
             setShowToast(false)

           }, timeout);
    };
    const showModalMessage = (message, timeout) => {
      
        
           setMessage(message);
           setShowModal(true);
           clearTimeout(() => {
             setShowModal(false)

           }, timeout);
    };
         
          
         
      

    return (
      <div>
        <button onClick={() => showToastMessage("This is a toast message")}>Show Toast</button>
        {showToast && <Toast message={message} timeout={5000} onClose={() => setShowToast(false)} />}
        <span></span>
        <button onClick={() => showModalMessage("This is a modal message")}>Show Modal</button>
        {showModal && <Modal message={message} timeout={5000} onClose={()=> setShowModal(false)}/>}
      </div>
    )
}
export default App;