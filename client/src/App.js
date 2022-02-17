import Landing from "./pages/Landing";
import styled from "styled-components";

const Button = styled.button`
  background: red;
  color: white;
  font-size: 1rem;
`;

function App() {
  return (
    <>
      <Button>Click me</Button>
      <h2>Welcome to jobify</h2>
      <Landing />
    </>
  );
}

export default App;
