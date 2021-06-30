/** @jsxImportSource @emotion/react */
import { React } from 'react';

import BaseInput from '../UI/Input/BaseInput';
import BaseButton from '../UI/Button/BaseButton';

import { __form } from './UserForm.styles';

const UserForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    console.log('Submitted!');
  };

  return (
    <form css={__form} onSubmit={onSubmit}>
      <h1>Insert a new user:</h1>

      <BaseInput
        name="user"
        label="Username"
        placeholder="Insert your username"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />

      <BaseInput
        name="role"
        label="Role"
        placeholder="Insert your current Role"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />

      <BaseButton
        label="Submit"
        title="Submit"
        type="submit"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default UserForm;
