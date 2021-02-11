import React, { useState, useEffect } from "react";
import Axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import TextCard from "./TextCard";

function TextsIndex({ currentPageNum, currentPageSize }) {
  const [texts, setTexts] = useState([]);
  const [pageNum, setPageNum] = useState(currentPageNum);
  const [pageSize, setPageSize] = useState(currentPageSize);

  useEffect(() => {
    Axios.get("http://localhost:9000/texts/", {
      params: { pageNum, pageSize },
    })
      .then((res) => {
        console.log(res.data);
        setTexts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNum]);

  const textList = () => {
    return texts.map((currentText, i) => {
      return <TextCard content={currentText} key={i} />;
    });
  };

  const changePage = (e) => {
    e.preventDefault();
    setPageNum(pageNum + 1);
  };

  return (
    <Container>
      <br />
      <Row xs={1} sm={2} md={3} lg={4}>
        {textList()}
      </Row>
      <br />
      <Row className="justify-content-md-center">
        <Col xs lg="1" className="text-right">
          <Button variant="link" size="sm">
            Previous
          </Button>
        </Col>
        <Col md="auto" className="text-center">
          {pageNum}
        </Col>
        <Col xs lg="1" className="text-left">
          <Button variant="link" size="sm" onClick={changePage}>
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

TextsIndex.defaultProps = {
  currentPageNum: 1,
  currentPageSize: 12,
};

export default TextsIndex;
