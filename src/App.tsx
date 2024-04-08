import React, { useEffect,useState } from "react";
// import { Toast } from './components/Toast.tsx';
// import { Modal } from "./components/Modal.tsx";
import './App.css';

const App: React.FC = () => {   
    const [showToast, setShowToast] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');

    const showToastMessage = (message: string, timeout: number) => {
        setMessage(message);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, timeout);
    };

    const showModalMessage = (message: string, timeout: number) => {
        setMessage(message);
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, timeout);
    };

    const Toast = ({ message, timeout, onClose }) => {

        const [hovered, setHovered] = useState(false);
        const [timeInterval, setTimeInterval] = useState(0);
        useEffect(() => {
            if (!hovered) {
                setTimeout(() => {

                    onClose();
                }, timeout);

            } else {
                setTimeInterval((prev) => prev + 1);
                clearTimeout(timeInterval);
            }
        }, [hovered, onClose, timeInterval, timeout]);

        const handleMouseEnter = () => {
            setHovered(true);

            setTimeInterval((prev) => prev + 1);
        }

        const handleMouseLeave = () => {
            setHovered(false);
            onClose();
        }
        return (
            <div className="toast" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button className="onCloseButton" onClick={onClose}>X</button>
                <div className="toast-message">{message}</div>
            </div>
        );
    };

    const Modal = ({ message, timeout, onClose }) => {

        const [hovered, setHovered] = useState(false);
        const [timeInterval, setTimeInterval] = useState(0);
        useEffect(() => {
            if (!hovered) {
                setTimeout(() => {

                    onClose();
                }, timeout);

            } else {
                setTimeInterval((prev) => prev + 1);
                clearTimeout(timeInterval);
            }
        }, [hovered, onClose, timeInterval, timeout]);

        const handleMouseEnter = () => {
            setHovered(true);

            setTimeInterval((prev) => prev + 1);
        }

        const handleMouseLeave = () => {
            setHovered(false);
            onClose();
        }
        return (
            <div className="toast" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button className="onCloseButton" onClick={onClose}>X</button>
                <div className="toast-message">{message}</div>
            </div>
        )
    };

    return (
        <div>
            <button onClick={() => showToastMessage("This is a toast message", 5000)}>Show Toast</button>
            {showToast && <Toast message={message} timeout={5000} onClose={() => setShowToast(false)} />}
            <span></span>
            <button onClick={() => showModalMessage("This is a modal message", 5000)}>Show Modal</button>
            {showModal && <Modal message={message} timeout={5000} onClose={() => setShowModal(false)} />}
        </div>
    )
}

export default App;
