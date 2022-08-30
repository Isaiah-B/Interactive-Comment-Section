import { useState } from "react"

import { CreateUserModalBg, CreateUserForm } from './create-user-modal.styles';

const CreateUserModal = ({ handleCreateUser }) => {
  const [username, setUsername] = useState('');

  return (
    <CreateUserModalBg>
      <CreateUserForm onSubmit={(event) => handleCreateUser(event, username)}>
        <label>What is your name?</label>
        <input 
          type="text" 
          onChange={({target}) => setUsername(target.value)} 
          placeholder='Enter name'
          minLength='3'
          required
        />
        <button type="submit">Submit</button>
      </CreateUserForm>
    </CreateUserModalBg>
  )
}

export default CreateUserModal;