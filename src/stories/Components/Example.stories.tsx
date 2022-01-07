import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Example from "@components/Examples";

export default {
  title: "Components/Example",
  component: Example,
};

const Template: Story = ({ children }) => {
  return <Example>{children}</Example>;
};

export const Default = Template.bind({});
Default.args = {
  children: "he",
};
