import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

import "./App.css";
import BaseComponent from "./components/BaseComponent";

function App() {
  return (
    <Container className="filter-bar-contianer mb-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <BaseComponent
            title="Sub-Category"
            description="The assets are distributed between equity and cash & equivalents."
            type="pieChart"
          />
        </Col>
        <Col md={4}>
          <BaseComponent
            title="Fund Distribution"
            description="A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund."
            type="barChart"
          />
        </Col>
        <Col md={4}>
          <BaseComponent
            title="Top Sectors"
            description="The assets are distributed between equity and cash & equivalents."
            type="stackedBarChart"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
