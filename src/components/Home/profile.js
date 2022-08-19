import { Fragment } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaInfo } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

const Profile = () => {
  return (
    <Fragment>
      <div className="d-flex justify-content-center mt-4">
        <Card className="bg-dark text-white" style={{ width: "70%" }}>
          <Row className="d-flex">
            <Col
              className="d-flex flex-column"
              style={{ width: "100%", margin: "1rem" }}
            >
              <Card.Text className="d-flex justify-content-center align-items-center">
                <FaInfo className="me-2" />
                <div className="fw-semibold">Information</div>
              </Card.Text>
              <span style={{ border: "1px solid #999" }}></span>
              <Card.Text className="my-3">
                <div className="mb-4" style={{ color: "#999" }}>
                  Website ini dibuat pada saat mengikuti ReactJS deacourse. Pada
                  saat selesai course, seperti biasa bang dea selalu memberikan
                  challenge untuk melatih kemampuan dalam coding seperti:
                </div>
                <div style={{ color: "#999" }}>
                  <ul>
                    <li>
                      Routing URL posts dengan isian component dari API Post
                    </li>
                    <li>Membuat Ui Homepage</li>
                    <li>Active Navigation Bar</li>
                    <li>
                      Ketika post title diklik munculkan popup detail dari API
                    </li>
                  </ul>
                </div>
                <a
                  href="https://github.com/farhanreizha"
                  target="_blank"
                  className="d-flex text-white text-decoration-none me-3 justify-content-end align-items-center"
                >
                  <GrGithub className="fs-4 me-2" />
                  <div className="fs-5">Github</div>
                </a>
              </Card.Text>
            </Col>
          </Row>
        </Card>
      </div>
    </Fragment>
  );
};

export default Profile;
