import React, {useState} from 'react';
import './App.css';
import uuid from 'uuid';
import Form from './Form';

const initialTeam = [
  {id: uuid(), name: 'Funmilayo', email: 'talabifunmilayo@gmail.com', role: 'Front End Developer'}
];

const initialTeamForm = {name: '', email: '', role: ''};


function App() {
const [teamMembers, setTeamMembers] = useState(initialTeam);
const [teamForm, setTeamForm] = useState(initialTeamForm);

const onNameChange = e => {
  setTeamForm({
    name: e.target.value,
    email: teamForm.email,
    role: teamForm.role
  })
}

const onEmailChange = e => {
  setTeamForm({
    name: teamForm.name,
    email: e.target.value,
    role: teamForm.role
  })
}

const onRoleChange = e => {
  setTeamForm({
    name: teamForm.name,
    email: teamForm.email,
    role: e.target.value
  })
}

const onFormSubmit = e => {
  e.preventDefault();
  const newTeamMember = {
    id: uuid(),
    name: teamForm.name,
    email: teamForm.email,
    role: teamForm.role
  };

const newTeamMembersList = teamMembers.concat(newTeamMember);
setTeamMembers(newTeamMembersList)
setTeamForm(initialTeamForm);
}



  return (
    <div className="App">
      <h4>As a distinguished member of our team, fill this form below!</h4>
      <Form 
      onNameChange={onNameChange}
      onEmailChange={onEmailChange}
      onRoleChange={onRoleChange}
      onFormSubmit={onFormSubmit}
      teamForm ={teamForm}
      />
      {
        teamMembers.map(team => (
          <div key={team.id}>
          <h5>Name:</h5>
          <p>{team.name}</p>
          <h5>Email:</h5>
          <p>{team.email}</p>
          <h5>Role</h5>
          <p>{team.role}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
