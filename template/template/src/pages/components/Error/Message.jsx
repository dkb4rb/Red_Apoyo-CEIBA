import React from "react";
import './Message.css'

const Message= ({Mensaje}) => {
    return (
        <div className="Message">
        {Mensaje}
        </div>
    );
}
export default Message;