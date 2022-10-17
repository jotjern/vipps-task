import InfoCard from "./InfoCard";
import "./DebugPanel.css";

export default function DebugPanel(props: {debug_info: String}) {
    return <details className="debug-panel">
        <summary>Debug info</summary>
        <InfoCard>
          <pre>{props.debug_info}</pre>
        </InfoCard>
    </details>
}