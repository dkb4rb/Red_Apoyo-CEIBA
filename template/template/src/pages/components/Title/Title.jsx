import React from "react";

const Title = ({title, subtitle, clsname}) => {
    return (
        <div className={clsname}>
            <h1>
                {title}
                <br />
                <p><b>{subtitle}</b></p>
            </h1>
        </div>
    )
};

export default Title;