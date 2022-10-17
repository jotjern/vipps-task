import "./InfoCard.css";

export default function InfoCard(props: {children: React.ReactNode}) {
    return <div className="info-card">
        {props.children}
    </div>
}