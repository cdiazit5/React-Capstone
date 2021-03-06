import React from 'react';
import { useState } from 'react';
// import useState from 'react';
import NbosOpportunitySummaryChart from '../molecules/NbosOpportunitySummaryChart';
import NbosPipelineOppGrid from '../molecules/NbosPipelineOppGrid';
import NbosPipelineSurfaceCard from '../atoms/NbosPipelineSurfaceCard';
import NbosPipelineSwitchToggle from '../atoms/NbosPipelineSwitchToggle';
import NbosTop5OppTag from '../atoms/NbosTop5OppTag';

export default function NbosPipelineTemplate({
  opportunitySummary,
  opportunityDetail,
}) {
  const [show5, showAll] = useState(true);
  const onClick = () => showAll(!show5);
  const arrayForSort = [...opportunityDetail.opportunities];
  const sortedArray = arrayForSort.sort(function (a, b) {
    return b.revenue - a.revenue;
  });
  const newArrayTop5 = sortedArray.slice(0, 5);

  return (
    <div className="tw-mx-6 tw-mt-6">
      <NbosPipelineSurfaceCard>
        <NbosPipelineSwitchToggle />
        <NbosOpportunitySummaryChart opportunitySummary={opportunitySummary} />
        <div>
          <NbosTop5OppTag show5={show5} />
          <NbosPipelineOppGrid
            opportunityDetail={opportunityDetail}
            top5={newArrayTop5}
            show5={show5}
          />
          <button
            onClick={onClick}
            className="tw-mb-4 tw-text-[#0166cc] tw-text-md tw-font-bold"
          >
            {show5 ? 'View Full Pipeline' : 'View Top 5'}
          </button>
        </div>
      </NbosPipelineSurfaceCard>
    </div>
  );
}
