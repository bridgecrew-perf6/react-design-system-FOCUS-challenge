import { Story } from "@storybook/react/types-6-0";
import { TopCarousel } from "@components/Carousel";
import { top_event } from "@static/data/topEventCarousel";

export default {
  title: "Components/BottomCarousel",
  container: TopCarousel,
};

const Template: Story = () => {
  return <TopCarousel data={top_event} />;
};

export const Default = Template.bind({});
Default.args = {};
