import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.div`
  height: 14rem;
  width: 23rem;
  //border: .1rem solid black;
  //border-radius: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  //background: var(--orange-7);
`;
const Button = styled.div`
  padding: 2rem 5rem;
  border: .1rem solid green;
  background: lime;
  border-radius: .5rem;
  cursor: pointer;
  :hover{
    filter: brightness(80%);
  }
`
const Login = () => {
    return (
        <ButtonWrapper>
            <Button>
                Login
            </Button>
        </ButtonWrapper>
    );
};

export default Login;
