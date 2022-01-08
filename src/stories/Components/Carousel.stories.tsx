import { Story } from "@storybook/react/types-6-0";
import CarouselComponent from "@components/Carousel";
import { top_event } from "@static/data/topEventCarousel";

export default {
  title: "Components/CarouselComponent",
  container: CarouselComponent,
};

const Template: Story = () => {
  return <CarouselComponent data={top_event} />;
};

export const Default = Template.bind({});
Default.args = {};
