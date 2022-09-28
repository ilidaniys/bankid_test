import styled from "styled-components";
import Login from "./Login";


const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: var(--yellow-1);
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
      <Container>
          <Wrapper>
              <Login/>
          </Wrapper>
      </Container>
  );
}

export default App;
