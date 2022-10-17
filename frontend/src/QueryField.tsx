import React from "react";
import "./QueryField.css";

export default function QueryField(props: {onSubmit: (s: string) => void, text?: string}) {
    const [query, setQuery] = React.useState("");

    return (
        <form className="query-field" onSubmit={e => {
            setQuery("");
            props.onSubmit(query);
            e.preventDefault();
        }}>
            <input value={query} type="text" onChange={e => setQuery(e.target.value)} />
            <input type="submit" value={props.text || "Submit"} className="query-field-button" />
        </form>
    );
}