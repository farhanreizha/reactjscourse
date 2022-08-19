import { Fragment } from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <footer
          className="d-flex justify-content-center my-4"
          style={{ width: "100%" }}
        >
          <div className="d-flex gap-2">
            <strong>&copy; Copyright</strong>
            <a
              href="https://github.com/farhanreizha"
              className="text-danger text-decoration-none"
              target="_blank"
            >
              Farhan Reizha
            </a>{" "}
            2022 &hearts;
          </div>
        </footer>
      </Container>
    </Fragment>
  );
};

export default Footer;
