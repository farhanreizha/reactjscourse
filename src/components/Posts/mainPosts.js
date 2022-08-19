import DetailPosts from "./detailPosts";
import { Container } from "react-bootstrap";

const Posts = () => {
  return (
    <>
      <Container>
        <h1 className="my-4">Posts</h1>
        <DetailPosts />
      </Container>
    </>
  );
};

export default Posts;
