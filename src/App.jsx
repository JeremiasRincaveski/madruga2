import "./App.css";
import "./resetCSS.css";
import { Spending } from "./Components/Spending/Spending";
import { Balance } from "./Components/Balance/Balance";
import Chart from "./Components/Chart/Chart";

function App() {
  return (
    <>
      <main className="App">
        {/* <Spending /> */}
        <Balance />
        <Chart />
      </main>
    </>
  );
}

export default App;
