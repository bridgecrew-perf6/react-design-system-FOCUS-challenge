import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Banner from "@components/Banner";

export default {
  title: "Components/Banner",
  container: Banner,
};

const Template: Story = () => {
  return <Banner />;
};

export const Default = Template.bind({});
Default.args = {};
