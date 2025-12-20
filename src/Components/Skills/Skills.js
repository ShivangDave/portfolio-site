import React from 'react';

export default () => {

  const skills = [
    { name: 'React', level: '95%' },
    { name: 'JavaScript', level: '97%' },
    { name: 'Python', level: '85%' },
    { name: 'Node.js', level: '90%' },
    { name: 'UI/UX Design', level: '88%' },
    { name: 'CSS/SCSS', level: '92%' },
    { name: 'Git', level: '95%' },
    { name: 'Docker', level: '80%' },
    { name: 'AWS', level: '82%' },
    { name: 'MongoDB', level: '88%' },
    { name: 'PostgreSQL', level: '90%' },
    { name: 'REST APIs', level: '96%' }
  ];

  return (
    <section id="skills" className={'skills-container'}>
      <div className={'section-header'}>
        <h2 className={'section-title'}>Skills & Expertise</h2>
        <p className={'section-subtitle'}>
          Expertise in modern web technologies and best practices
        </p>
      </div>
      
      <div className={'skills-grid'}>
        {skills.map((skill, idx) => (
          <div key={idx} className={'skill-card'}>
            <div className={'skill-name'}>{skill.name}</div>
            <div className={'skill-level'}>{skill.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
