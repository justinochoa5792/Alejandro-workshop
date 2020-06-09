import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import { Button } from 'antd';

export const Text = styled.p`
  color: ${(props) => (props.color.counter < 2 ? 'red' : 'blue')};
`;

const StyledButton = styled(Button)`
  border: 1px solid red;
  background-color: blue;
`;

const App = () => {
  const [state, setState] = useState({ counter: 0 });
  return (
    <div>
      <Text color={state}>counter: {state.counter}</Text>
      <StyledButton primary onClick={() => setState((prev) => ({ counter: prev.counter + 1 }))}>
        +
      </StyledButton>
    </div>
  );
};

export default hot(module)(App);
