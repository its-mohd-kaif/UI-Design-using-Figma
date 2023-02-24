import Header from "./components/header/Header";
import LeftContainer from "./components/leftContent/LeftContainer";
import RightContainer from "./components/rightContent/RightContainer";
import "./App.css";
function App() {
  return (
    <section>
      <Header />
      <div className="container">
        <LeftContainer />
        <RightContainer />
      </div>
    </section>
  );
}

export default App;
