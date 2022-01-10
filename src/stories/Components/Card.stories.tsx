import { Story } from "@storybook/react/types-6-0";
import CardComponent from "@components/Card";
import { time_deal } from "@static/data/todaysSpecial";
import { popular_event } from "@static/data/event";

export default {
  title: "Components/Card",
  container: CardComponent,
};

const Template: Story = ({ datas }) => {
  return (
    <>
      {datas.map((data: any) => {
        return (
          <CardComponent
            key={data.id}
            title={data.title}
            creator={data.creator}
            img={data.img}
            like={data.like}
            thumsUp={data.thumsUp}
            price={data.price}
            coupon={`${data.coupon}만원 쿠폰`}
            period={data.period}
          />
        );
      })}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  datas: time_deal,
};

export const Example1 = Template.bind({});
Example1.args = {
  datas: popular_event,
};
