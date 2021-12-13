import React from 'react';
import { Switch } from 'antd';

export default function NbosMetricToggle() {
  return (
    <div>
      {/* <span className="tw-border-2 tw-px-9 tw-py-1 tw-rounded-l-md tw-border-blue-600 tw-text-blue-600">
        Outcome Metrics
      </span>
      <span className="tw-border-2 tw-px-9 tw-py-1 tw-rounded-r-md tw-border-blue-600 tw-text-blue-600">
        Behavior Metrics
      </span> */}
      <Switch
        checkedChildren="Outcome Metrics"
        unCheckedChildren="Behavior Metrics"
        defaultChecked
      />
    </div>
  );
}
