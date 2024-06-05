import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Container } from "./components/Container";
import { Body } from "./components/Body";
import Controls from "./components/Controls";
import "./App.css";
import { useSelector } from "react-redux";
import { PrivacyMsg } from "./components/PrivacyMsg";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <center className="px-2 py-5 my-5">
        <Container>
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privacy? <PrivacyMsg/> : <Body/>}
            <Controls></Controls>
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
