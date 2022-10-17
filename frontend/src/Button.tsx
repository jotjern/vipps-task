export default function Button(props: {text: string, onClick: () => void, active?: boolean}) {
    return <>
        <button
            className={"vipps-button " + (props.active ? "vipps-button-active" : "")}
            onClick={() => props.onClick()}>{props.text}</button>
    </>
}
