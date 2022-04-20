import React from "react";
import './Message.css'

const Message = ({ Mensaje, children, stilo }) => {
    return (
        <div className="Message">
            <div className={stilo}>
                {Mensaje}
            </div>
            {children}
        </div>
    );
}
export default Message;