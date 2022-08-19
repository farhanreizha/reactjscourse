import { Fragment, useEffect, useState } from "react";
import { Modal, Button, ButtonGroup } from "react-bootstrap";
import ModulePopup from "../utilities/modal";
import Loaders from "../utilities/loaders";
import Axios from "axios";

const DetailPosts = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let flush = false;
    if (!flush) {
      setLoading(true);
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`,
      })
        .then((result) => setPosts(result.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
    return () => (flush = true);
  }, [limit]);

  const handdleLimit = (option) => {
    option === "+"
      ? setLimit((prev) => prev + 1)
      : setLimit((prev) => (prev <= 1 ? 1 : prev - 1));
  };

  if (loading) return <Loaders />;
  return (
    <Fragment>
      <ButtonGroup>
        <Button variant="outline-primary" onClick={() => handdleLimit("-")}>
          -
        </Button>
        <Button variant="outline-primary" onClick={() => handdleLimit("+")}>
          +
        </Button>
      </ButtonGroup>
      <div className="d-flex flex-column mt-4">
        {posts.map((post, i) => (
          <Fragment key={i}>
            <ModulePopup
              activator={({ setShow }) => (
                <Button
                  variant="link"
                  className="text-black text-decoration-none"
                  onClick={() => setShow(true)}
                >
                  {post.title}
                </Button>
              )}
            >
              <Modal.Title>post Id: {post.id}</Modal.Title>
              <Modal.Body>
                <p className="d-flex flex-column gap-2">
                  <div>
                    <strong>user Id</strong>: {post.userId}
                  </div>
                  <div>
                    <strong>Title</strong>: {post.title}
                  </div>
                  <div>
                    <strong>description</strong>: {post.body}
                  </div>
                </p>
              </Modal.Body>
            </ModulePopup>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default DetailPosts;
