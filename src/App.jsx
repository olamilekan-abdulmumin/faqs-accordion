import Curvyline from "./assets/background-pattern-desktop.svg";
import Accordion from "./components/Accordion";

function App() {
  return (
    <>
      <section className="bg-purple h-screen relative">
        <div className="bg-dark-purple w-full h-[300px]">
          <img className="w-full" src={Curvyline} alt="" />
        </div>
        <Accordion />
      </section>
    </>
  );
}

export default App;
