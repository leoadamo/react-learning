/** @jsxImportSource @emotion/react */
import React from 'react';

import BaseInput from '../UI/Input/BaseInput';
import BaseButton from '../UI/Button/BaseButton';
import Plus from '../Icons/Plus';

import { __wrapper } from './AddTodo.styles';

const AddTodo = () => {
  return (
    <div css={__wrapper}>
      <BaseInput
        id="task"
        name="task"
        placeholder="What will you do today?"
        onChange={({ target }) => console.log(target.value)}
      />

      <BaseButton
        className="wrapper__button"
        isPrimary
        onClick={() => console.log('Clicked!')}
      >
        ADD
        <Plus fill="#FFFFFF" />
      </BaseButton>
    </div>
  );
};

export default AddTodo;
