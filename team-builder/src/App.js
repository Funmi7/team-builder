import React, {useState} from 'react';
import './App.css';
import uuid from 'uuid';
import Form from './Form';
import styled from 'styled-components';


const TeamMembersContainerStyle = styled.div`
   background-color: rgb(184, 217, 245);
   width: 50%;
   margin: 0 auto;
   margin-bottom: 30px;
`;

const TeamMemberStyle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  color: black;

  h5 {
    margin-right: 5px;
  }
`;


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
          <TeamMembersContainerStyle key={team.id}>
          <TeamMemberStyle>
            <h5>Name:</h5>
            <p>{team.name}</p>
          </TeamMemberStyle>
          <TeamMemberStyle>
            <h5>Email:</h5>
            <p>{team.email}</p>
          </TeamMemberStyle>
          <TeamMemberStyle>
            <h5>Role</h5>
            <p>{team.role}</p>
          </TeamMemberStyle>
          </TeamMembersContainerStyle>
        ))
      }
    </div>
  );
}

export default App;
