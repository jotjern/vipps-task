import React, { useEffect } from "react";
import Button from "./Button";
import "./VippsButton.css";

export default function ButtonToggle(props: {off_text: string, on_text: string, onChange: (b: boolean) => void}) {
    const [toggleState, setToggleState] = React.useState(false);

    useEffect(() => props.onChange(toggleState), [toggleState]);

    return <div>
        <Button active={!toggleState} text={props.off_text} onClick={() => setToggleState(false)} />
        <Button active={toggleState} text={props.on_text} onClick={() => setToggleState(true)} />
    </div>
}