import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';


const WorkExperience: React.FC = () => {

  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      // Filter for work entries only
      setTimeLineData(data.filter(item => item.timelineType === 'work'));
    }
    fetchTimelineItem();
  }, []);


  if (!timeLineData) return <div>Loading...</div>;
  console.log("🚀 ~ timeLineData:", timeLineData)

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">💼 Work Experience</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
            date={item.dateRange}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <div style={{ color: '#fff' }}>
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle" style={{ color: 'rgba(255,255,255,0.85)' }}>
                {item.name}
              </h4>
              {item.techStack && (
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
              )}
              <p>{item.summaryPoints}</p>
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
