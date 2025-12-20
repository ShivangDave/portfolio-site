import React from 'react';

export default () => {

  const timelineItems = [
    {
      year: 'Nov 2021 - Present',
      title: 'Technical Solutions Engineer',
      company: 'Stripe, Inc.',
      location: 'Houston, TX | Remote',
      description: '',
      type: 'work'
    },
    {
      year: 'Apr 2019 - Oct 2021',
      title: 'Lead Instructor, Software Engineering',
      company: 'Flatiron School LLC x We Company',
      location: 'Atlanta, GA | Houston, TX',
      description: '',
      type: 'work'
    },
    {
      year: 'Jan 2018 - Dec 2018',
      title: 'Graduate Teaching Assistant',
      company: 'University of Houston - Clear Lake',
      location: 'Houston, TX',
      description: '',
      type: 'work'
    },
    {
      year: 'Jan 2017 - Dec 2018',
      title: 'Master of Science - Computer Science',
      company: 'University of Houston - Clear Lake',
      location: 'Houston, TX',
      description: '',
      type: 'education'
    },
    {
      year: 'Jun 2012 - Jun 2016',
      title: 'Bachelor of Engineering - Information Technology',
      company: 'Gujarat Technological University',
      location: 'Ahmedabad, India',
      description: '',
      type: 'education'
    }
  ];

  return (
    <section id="timeline" className={'timeline-container'}>
      <div className={'section-header'}>
        <h2 className={'section-title'}>Career Timeline</h2>
        <p className={'section-subtitle'}>
          My professional journey and educational background
        </p>
      </div>
      
      <div className={'timeline-wrapper'}>
        <div className={'timeline-line'}></div>
        <div className={'timeline-items'}>
          {timelineItems.map((item, idx) => (
            <div key={idx} className={`timeline-item ${item.type === 'work' ? 'work-item' : 'education-item'}`}>
              <div className={'timeline-marker'}></div>
              <div className={'timeline-content'}>
                <div className={'timeline-year'}>{item.year}</div>
                <div className={'timeline-title'}>{item.title}</div>
                <div className={'timeline-company'}>{item.company}</div>
                <div className={'timeline-location'}>{item.location}</div>
                {item.description && (
                  <div className={'timeline-description'}>{item.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

