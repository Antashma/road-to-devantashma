import { useSelector } from "react-redux";

export default function FetchHistory() {
const fetchHistoryState = useSelector(st => st.history);

  return (
    <article>
      <h2>Pokemon Fetch History</h2>
      {
        fetchHistoryState.length > 0 ?
        fetchHistoryState.map((p, idx) => <p key={idx}>{p}</p>) 
        : <p>Nothing in your history. Get to fetching!</p>
      }
    </article>
  );
}

