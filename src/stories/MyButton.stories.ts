// MyButton.stories.ts

import { Meta, Storyfn } from "@storybook/vue3";
import MyButton from "../components/MyButton.vue";

// Define metadata for the component
const meta: Meta<typeof MyButton> = {
  title: "Example/MyButton",
  component: MyButton,
  tags: ["autodocs"],
  argTypes: {
    // Define any arguments or actions here if needed
  },
};

export default meta;

// Template to create stories
const Template: Storyfn<typeof MyButton> = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<MyButton v-bind="args">Button Text</MyButton>',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  // Set default arguments if needed
};

// Another story with different props (if applicable)
export const WithCustomText = Template.bind({});
WithCustomText.args = {
  // Set custom arguments if needed
};
