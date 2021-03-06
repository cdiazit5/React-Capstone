import React from 'react';
import SwitchSelector from 'react-switch-selector';

const options = [
  {
    label: 'Outcome Metrics',
    value: 'outcome',
    selectedBackgroundColor: '#ffffff',
    selectedFontColor: '#0166CC',
  },
  {
    label: 'Behavior Metrics',
    value: 'behavior',
    selectedBackgroundColor: '#ffffff',
    selectedFontColor: '#0166CC',
  },
];

const onChange = newValue => {
  console.log(newValue);
};

const initialSelectedIndex = options.findIndex(({ value }) => value === 'bar');

export const NbosMetricsSwitchToggle = () => {
  return (
    <div className="tw-text-center tw-rounded-lg tw-p-2 tw-w-1/2 tw-h-[3rem]">
      <SwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={'#0166CC'}
        fontColor={'#f5f6fa'}
        wrapperBorderRadius={4}
        optionBorderRadius={4}
      />
    </div>
  );
};

export default NbosMetricsSwitchToggle;
