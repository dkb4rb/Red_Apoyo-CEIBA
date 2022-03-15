import React from "react";
import './Label.css'

const Label = ({texto}) => {
    return (
        <div className="Label">
        {texto}
        </div>
    );
}
export default Label;