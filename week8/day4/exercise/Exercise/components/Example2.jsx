import React from 'react';
import data from './data.json';

class Example2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        {data.Skills.map((skillArea, index) => (
          <div key={index}>
            <h3>{skillArea.Area}</h3>
            <ul>
              {skillArea.SkillSet.map((skill, index) => (
                <li key={index}>
                  {skill.Name} {skill.Hot && <span style={{ color: 'red' }}>🔥</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
