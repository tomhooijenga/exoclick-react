import './App.css';
import { Banner } from "./exoclick-react";
import { useState } from "react";

function App() {

  const [amount, setAmount] = useState(1);

  return (
    <div>
      <div>
        <button onClick={() => setAmount(amount + 5)}>More</button>
        <button onClick={() => setAmount(Math.max( amount - 5, 0))}>Less</button>
      </div>
      {new Array(amount).fill(0).map((_, i) => {
        return <Banner zoneId={2915820} key={i} />
      })}

    </div>
  );
}

export default App;