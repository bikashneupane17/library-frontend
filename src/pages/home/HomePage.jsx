import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomCarousel } from "../../components/carousel/CustomCarousel";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CustomCard } from "../../components/card/CustomCard";

export const HomePage = () => {
  return (
    <DefaultLayout>
      <CustomCarousel />

      {/* Book List */}
      <Container>
        <Row>
          <Col className="mt-2 d-flex justify-content-between">
            <label htmlFor="">20 Books Found!</label>
            <div className="">
              <Form.Control placeholder="Search by name..." />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomCard />
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};
