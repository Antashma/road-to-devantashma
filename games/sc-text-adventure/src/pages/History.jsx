export default function History({ historyData }) {

    const displayHistory = () => {
        return historyData.map((data, index) => {
            let { label, text, isThought } = data;

            return (
                <div key={index} className="history-card">
                    <p className="history-text">{isThought? `(${text})` : text}</p>
                    {label && 
                        <p className="history-label">-- {label}</p>
                    }
                </div>
            )   
        })
    }

    return (
        <section id="history" className="card">
            <h2>History</h2>
            {displayHistory()}
        </section>
    )
}