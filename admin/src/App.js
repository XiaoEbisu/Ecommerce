import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

const Container = styled.div`
  display: flex;
`;

const Other = styled.div`
  flex: 4;
`;

function App() {
  return (
    <div className="App">
      <Topbar />
      <Container>
        <Sidebar />
        <Other />
      </Container>
    </div>
  );
}

export default App;
