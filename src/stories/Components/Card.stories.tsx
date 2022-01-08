import { Story } from "@storybook/react/types-6-0";
import CardComponent from "@components/Card";
import { time_deal } from "@static/data/todaysSpecial";

export default {
  title: "Components/Card",
  container: CardComponent,
};

const Template: Story = () => {
  return (
    <>
      {time_deal.map((card) => {
        return (
          <CardComponent
            key={card.id}
            title={card.title}
            creator={card.creator}
            img={card.img}
            like={card.like}
            thumsUp={card.thumsUp}
            price={card.price}
            coupon={card.coupon}
          />
        );
      })}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
