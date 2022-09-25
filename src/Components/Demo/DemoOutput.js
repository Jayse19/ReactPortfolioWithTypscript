import React from "react";

const DemoOutput = (props) => {
    return <p>{props.show ? "This is some cool info!" : ""}</p>
}

export default React.memo(DemoOutput)