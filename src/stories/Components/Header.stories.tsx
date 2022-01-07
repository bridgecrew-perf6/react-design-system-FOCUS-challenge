import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Header from "@components/Header";

export default {
  title: "Components/Header",
  container: Header,
};

const Template: Story = ({}) => {
  return <Header />;
};

export const Default = Template.bind({});
Default.args = {};
