import Button from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
