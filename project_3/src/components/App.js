/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import { React, Fragment } from 'react';

import Styles from '../styles/global.styles';

import UserForm from './UserForm/UserForm';

const App = () => {
  return (
    <Fragment>
      <Global styles={Styles} />

      <UserForm />
    </Fragment>
  );
};

export default App;
