import React from "react";

const Title = ({title, subtitle}) => {
    return (
        <div className="Title">
            <h1>
                {title}
                <br />
                <p><b>{subtitle}</b></p>
            </h1>
        </div>
    )
};

export default Title;