import React, { useEffect, useState } from "react";

const Toast = ({ message, timeout, onClose}) => {

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
        
            
            
            
            
        }, [hovered, onClose,timeInterval, timeout]);
        
        const handleMouseEnter = () => {
            setHovered(true);
            
            setTimeInterval((prev) => prev + 1);
        
    }  

    const handleMouseLeave = () => {
        setHovered(false);
        onClose();
    }
    return (
        <div className="toast" onMouseEnter={ handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button  className="onCloseButton" onClick={onClose}>X</button>
            <div className="toast-message">{message}</div>
        </div>
    );
};

export { Toast };