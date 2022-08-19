import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Collection from "./collectionAlbums";

const Albums = ({ title, description }) => {
  return (
    <Fragment>
      <Container className="mt-4">
        <div className="d-flex flex-column">
          <Collection />
        </div>
      </Container>
    </Fragment>
  );
};

export default Albums;
