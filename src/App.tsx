import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import GlobalStlye from "./static/styles/global";

function App() {
  return (
    <>
      <GlobalStlye />
      <div className="App">
        <Header />
        <NavigationBar />
      </div>
    </>
  );
}

export default App;
