/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import { React, Fragment } from 'react';

import { __global } from '../styles/global.styles';

import UserForm from './UserForm/UserForm';

const App = () => {
  return (
    <Fragment>
      <Global styles={__global} />

      <UserForm />
    </Fragment>
  );
};

export default App;
