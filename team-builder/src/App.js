import React, {useState} from 'react';
import Form from './Form';
import './App.css';

function App() {
  // Setting up state for team members
  const [team, setTeam] = useState([{
    name: 'Shawn',
    email: 'sdelperc@gmail.com',
    role: 'Front-end Developer'
  }]);

  // a function to handle adding new team members from form data state
  function addTeamMember(member) {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    
    setTeam([...team, newMember]);
  };

  return (
    <div className='App'>
      <h1>Create a Team!!!!!</h1>
      <Form addTeamMember={addTeamMember} />
      <div className='teamCards'>
      {
        team.map(member => {
          return (
            <div key={member.email}>
              <h1>{member.name}</h1>
              <h4>{member.email}</h4>
              <p>{member.role}</p>
            </div> 
          );
        })
      }
      </div>
    </div>
  );
}

export default App;
