import React from 'react';
import styled from 'styled-components';


const FormContainerStyle = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;

    label {
        margin-top: 20px;
    }

    input {
        height: 30px;
    }

    button {
        margin-top: 20px;
        height: 40px;
        background-color: rgb(8, 115, 255);
        color: white;
        border-radius: 20px;
        width: 100px;
        margin: 20px auto;
        border-bottom-color:white;
    }
`

function Form(props) {
   const {onNameChange, onEmailChange, onRoleChange, onFormSubmit} = props;
   const {name, email, role} = props.teamForm;

   const isDisabled = () => {
    if (!name || !email || !role) {
        return true;
    }
        return false;
   }


   return (
    <FormContainerStyle>
        <label htmlFor='nameInput'>Name</label>
        <input
            value={name}
            onChange={onNameChange}
            id='nameInput'
            type='text'
        />

        <label htmlFor='emailInput'>Email</label>
        <input
            value={email}
            onChange={onEmailChange}
            id='emailInput'
            type='email'
        />

        <label htmlFor='roleInput'>Role</label>
        <input
            value={role}
            onChange={onRoleChange}
            id='roleInput'
            type='text'
        />     

        <button 
        disabled={isDisabled()}
        onClick={onFormSubmit}
        >
            Submit
        </button> 
    </FormContainerStyle>
   )
}

export default Form;