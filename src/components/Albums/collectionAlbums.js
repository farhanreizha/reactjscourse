import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import Loaders from "../utilities/loaders";

const Collection = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancled = false;
    if (isCancled === false) {
      setLoading(true);
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
    return () => (isCancled = true);
  }, [limit]);

  const handleLimit = (option) => {
    option === "+"
      ? setLimit((prev) => prev + 1)
      : setLimit((prev) => (prev <= 1 ? 1 : prev - 1));
  };

  if (loading) return <Loaders />;
  return (
    <Fragment>
      <h3>{limit} Collection</h3>
      <ButtonGroup className="d-flex justify-content-center align-item-center mb-2">
        <Button variant="outline-primary" onClick={() => handleLimit("-")}>
          -
        </Button>
        <Button variant="outline-primary" onClick={() => handleLimit("+")}>
          +
        </Button>
      </ButtonGroup>
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {datas.map((data, i) => (
          <Card style={{ width: "18rem" }} key={i}>
            <Card.Img variant="top" src={data.url} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Fragment>
  );
};

export default Collection;
