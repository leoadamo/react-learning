/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import { React, Fragment } from 'react';

import { __global } from '../styles/global.styles';

import BaseContainer from './UI/Container/BaseContainer';
import AddTodo from './AddTodo/AddTodo';

const App = () => {
  return (
    <Fragment>
      <Global styles={__global} />

      <BaseContainer>
        <AddTodo />
      </BaseContainer>
    </Fragment>
  );
};

export default App;
