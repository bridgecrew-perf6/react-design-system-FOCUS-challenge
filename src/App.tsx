import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import GlobalStlye from "./static/styles/global";
import CarouselComponent from "./components/Carousel";
import { top_event } from "./static/data/topEventCarousel";

function App() {
  return (
    <>
      <GlobalStlye />
      <div className="App">
        <Header />
        <NavigationBar />
        <CarouselComponent data={top_event} />
      </div>
    </>
  );
}

export default App;
