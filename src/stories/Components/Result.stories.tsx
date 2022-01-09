import React from "react";
import { Story } from "@storybook/react/types-6-0";
import App from "src/App";

export default {
  title: "Components/Result",
  component: App,
};

const Template: Story = () => {
  return <App />;
};

export const Default = Template.bind({});
Default.args = {};
