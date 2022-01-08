import { Story } from "@storybook/react/types-6-0";
import CardComponent from "@components/Card";

export default {
  title: "Components/Card",
  container: CardComponent,
};

const cards = [
  {
    provider: "콕스",
    title: "[💣오늘의 특가] 초보 그림러가 인기 작가가 되는 법, 콕스의 독학비법서",
    like: { count: 16752, percent: 99 },
    price: { percent: 32, pay: 52400, installment: 5 },
    endTime: 1,
  },
  {
    provider: "컹스",
    title: "[💣내일의 특가] 초보 그림러가 인기 작가가 되는 법, 컹스의 독학비법서",
    like: { count: 1672, percent: 89 },
    price: { percent: 34, pay: 42400, installment: 4 },
    endTime: 1,
  },
  {
    provider: "코크",
    title: "[💣어제의 특가] 초보 그림러가 인기 작가가 되는 법, 코크의 독학비법서",
    like: { count: 6752, percent: 79 },
    price: { percent: 35, pay: 32400, installment: 3 },
    endTime: 1,
  },
];

const Template: Story = () => {
  return (
    <>
      {cards.map((card, idx) => {
        return (
          <CardComponent
            key={idx}
            provider={card.provider}
            title={card.title}
            like={card.like}
            price={card.price}
            endTime={card.endTime}
          />
        );
      })}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
