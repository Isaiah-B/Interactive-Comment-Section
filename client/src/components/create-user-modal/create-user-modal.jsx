import { useState } from 'react';

import { CreateUserModalBg, CreateUserForm } from './create-user-modal.styles';

function CreateUserModal({ handleCreateUser }) {
  const [username, setUsername] = useState('');

  return (
    <CreateUserModalBg>
      <CreateUserForm onSubmit={(event) => handleCreateUser(event, username)}>
        <label htmlFor="usernameInput">
          What is your name?
          <br />
          <input
            id="usernameInput"
            type="text"
            onChange={({ target }) => setUsername(target.value)}
            placeholder="Enter name"
            minLength="3"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </CreateUserForm>
    </CreateUserModalBg>
  );
}

export default CreateUserModal;
