/* eslint-disable no-unused-vars */
import React from "react";

import Button from "./Button"; // Assuming Button component is in the same directory

// eslint-disable-next-line react/prop-types
const ButtonToggle = ({ show, setShow }) => {
    return (
        <Button onClick={() => setShow(!show)}>
            {show ? "hide" : "show"}
        </Button>
    )
}

export default ButtonToggle;