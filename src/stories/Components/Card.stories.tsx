import { Story } from "@storybook/react/types-6-0";
import CardComponent from "@components/Card";

export default {
  title: "Components/Card",
  container: CardComponent,
};

const Template: Story = ({ provider, title, like, price, endTime }) => {
  return (
    <CardComponent provider={provider} title={title} like={like} price={price} endTime={endTime} />
  );
};

export const Default = Template.bind({});
Default.args = {
  provider: "콕스",
  title: "[💣오늘의 특가] 초보 그림러가 인기 작가가 되는 법, 콕스의 독학비법서",
  like: { count: 16752, percent: 99 },
  price: { percent: 32, pay: 52400, installment: 5 },
  endTime: 1,
};
