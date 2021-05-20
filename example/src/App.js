import "./App.css";
import { useState } from "react";
import { Banner, Outstream } from "./exoclick-react";

function App() {

  const [amount, setAmount] = useState(1);
  const [zone, setZone] = useState(2915820);
  const [branding, setBranding] = useState(false);

  return (
    <div>
      <section>
        <button onClick={() => setAmount(amount + 5)}>More</button>
        <button onClick={() => setAmount(Math.max(amount - 5, 0))}>Less</button>
        <select value={zone} onInput={e => setZone(e.target.value)}>
          <option value={2915820}>Mobile</option>
          <option value={2921624}>Mobile 2</option>
          <option value={4043486}>Banner (728x90)</option>
          <option value={4282786}>Multi format</option>
        </select>
        <label>
          <input type="checkbox" value={branding} onInput={e => setBranding(e.target.checked)} />
          Branding
        </label>
      </section>
      <section>
        {new Array(amount).fill(0).map((_, i) => {
          return <Banner zoneId={zone} />
        })}
      </section>
      <section>
        <Outstream zoneId={4176664} branding={branding} maxWidth={200}/>
      </section>
    </div>
  );
}

export default App;