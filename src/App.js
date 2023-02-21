import Header from "./Components/Header/Header";
import LeftContainer from "./Components/Left Content/LeftContainer";
import RightContainer from "./Components/Right Content/RightContainer";
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
