import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './Education.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';

const Education: React.FC = () => {
  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      // Filter for education entries only
      setTimeLineData(data.filter(item => item.timelineType === 'education'));
    }
    fetchTimelineItem();
  }, []);

  if (!timeLineData) return <div className="timeline-loading">Loading...</div>;

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">🎓 Education</h2>
        <p className="timeline-subtitle">Academic background and qualifications</p>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(219, 32, 44)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(219, 32, 44)' }}
            date={item.dateRange}
            iconStyle={{ background: 'rgb(219, 32, 44)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: '#fff' }}>
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h4 className="vertical-timeline-element-subtitle" style={{ color: 'rgba(255,255,255,0.85)' }}>
                {item.title}
              </h4>
              {item.techStack && (
                <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>
                  🔬 {item.techStack}
                </p>
              )}
              {item.summaryPoints && (
                <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)' }}>
                  {item.summaryPoints}
                </p>
              )}
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

export default Education;
