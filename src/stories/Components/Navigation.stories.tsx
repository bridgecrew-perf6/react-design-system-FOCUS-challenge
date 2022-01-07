import React from "react";
import { Story } from "@storybook/react/types-6-0";
import NavigationBar from "@components/NavigationBar";

export default {
  title: "Components/NavigationBar",
  container: NavigationBar,
};

const Template: Story = () => {
  return <NavigationBar />;
};

export const Default = Template.bind({});
Default.args = {};
