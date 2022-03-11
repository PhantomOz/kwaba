import './App.css';
import RentForm from './component/rentForm/RentForm';
import { useState } from 'react';
import { Routes, Route} from "react-router-dom";
import PreApproval from './component/preapproval/PreApproval';

function App() {
  const [rent, setRent] = useState("");
  const [salary, setSalary] = useState("");
  const [plan, setPlan] = useState(1);
  const [status, SetStatus] = useState("");

  const handleCurrencyFormat = (rent) => {
    const slit = rent?.split("");
    const number = slit.filter((slt) => {
      return slt !== ",";
    });
    const val = parseInt(
      number
        .filter((slt) => {
          return slt !== "₦";
        })
        .join("")
    );
    if (rent.length === 0) {
      return "";
    } else if (Number.isNaN(val)) {
      return "";
    } else {
      return "₦" + new Intl.NumberFormat().format(val);
    }
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RentForm
              rnt={rent}
              srnt={setRent}
              sal={salary}
              ssal={setSalary}
              accStatus={status}
              saccStatus={SetStatus}
              plan={plan}
              sPlan={setPlan}
              handleRnt={handleCurrencyFormat}
            />
          }
        />
        <Route
          path="pre-approval"
          element={
            <PreApproval
              rnt={rent}
              srnt={setRent}
              sal={salary}
              ssal={setSalary}
              accStatus={status}
              saccStatus={SetStatus}
              plan={plan}
              sPlan={setPlan}
              handleRnt={handleCurrencyFormat}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
