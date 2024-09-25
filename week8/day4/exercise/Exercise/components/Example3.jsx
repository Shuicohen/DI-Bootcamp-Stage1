import React from 'react';
import data from './data.json';

class Example3 extends React.Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {data.Experiences.map((experience, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <img src={experience.logo} alt="company logo" style={{ width: '100px', borderRadius: '50%' }} />
            <h3>{experience.companyName}</h3>
            <a href={experience.url} target="_blank" rel="noopener noreferrer">{experience.companyName} Website</a>
            
            {experience.roles.map((role, idx) => (
              <div key={idx}>
                <p><strong>{role.title}</strong></p>
                <p>{role.description}</p>
                <p>{role.startDate} - {role.endDate}</p>
                <p>{role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
