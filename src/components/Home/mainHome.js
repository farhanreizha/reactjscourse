import { Container } from "react-bootstrap";
import Profile from "./profile";

const Home = () => {
  return (
    <>
      <Container className="my-4">
        <h1>Home Page</h1>
        <Profile />
      </Container>
    </>
  );
};

export default Home;
