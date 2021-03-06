import React from 'react';
import NbosSubTextBottomLeftBorder from '../../components/atoms/NbosSubTextBottomLeftBorder';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/NbosSubTextBottomLeftBorder',
  component: NbosSubTextBottomLeftBorder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <NbosSubTextBottomLeftBorder {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  subTextLabel: 'Name',
  topLabel: 'Number',
};
