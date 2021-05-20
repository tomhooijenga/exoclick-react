import './App.css';
import { Banner } from "./exoclick-react";
import { useState } from "react";

function App() {

  const [amount, setAmount] = useState(1);
  const [zone, setZone] = useState(2915820);

  return (
    <div>
      <div>
        <button onClick={() => setAmount(amount + 5)}>More</button>
        <button onClick={() => setAmount(Math.max( amount - 5, 0))}>Less</button>
        <select value={zone} onInput={e => setZone(e.target.value)}>
          <option value={2915820}>Mobile</option>
          <option value={2921624}>Mobile 2</option>
          <option value={4043486}>Banner (728x90)</option>
        </select>
      </div>
      {new Array(amount).fill(0).map((_, i) => {
        return <Banner zoneId={zone} key={i} />
      })}
    </div>
  );
}

export default App;