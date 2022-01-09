import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import GlobalStlye from "./static/styles/global";
import CarouselComponent from "./components/Carousel";
import { top_event } from "./static/data/topEventCarousel";
import Classes from "./components/Classes";
import { time_deal, md_recommend } from "./static/data/classDatas";
import styled from "styled-components";
import { CoverRatio } from "@class101/ui";

const ClassWrapper = styled.div`
  max-width: 1176px;
  margin: 0 auto;
  h4 {
    padding: 5px;
  }
`;

function App() {
  return (
    <>
      <GlobalStlye />
      <div className="App">
        <Header />
        <NavigationBar />
        <CarouselComponent data={top_event} />
        <ClassWrapper>
          <Classes data={time_deal} title="오늘의 특가! TIMEDEAL" />
          <Classes data={md_recommend} title="MD 추천 클래스" imageRatio={CoverRatio.RATIO_3X4} />
        </ClassWrapper>
      </div>
    </>
  );
}

export default App;
