import { Container } from "react-bootstrap";
import Profile from "./profile";

const Home = () => {
  return (
    <>
      <Container className="my-4">
        <h1>Home Page</h1>
        <h5>
          mohon maap aku ngga bisa membuat UI yang bagus tapi untuk logic yang
          aku buat tidak bagus juga sepertinya wkwk
        </h5>
        <Profile />
      </Container>
    </>
  );
};

export default Home;
