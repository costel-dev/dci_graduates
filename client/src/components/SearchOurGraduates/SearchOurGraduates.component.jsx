import React from "react";
import {
  Card,
  CardBody,
  Col,
  Input,
  Row,
  Form,
  FormGroup,
} from "reactstrap";

const SearchOurGraduates = ({ handleSearch }) => {
  return (
    <div>
      <Card className="pt-1 bg-default shadow text-center">
        <div>
          <h1 className="pt-3 text-white">
            Discover, Contact and Interview our Graduates
          </h1>
        </div>
        <CardBody>
          <Form role="form">
            {/* Search Inputs */}
            <Row>
              {/* Keyword Search */}
              <Col lg="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    id="input-keyword"
                    placeholder="Keyword"
                    type="text"
                    name="keyword"
                    onChange={handleSearch}
                  />
                </FormGroup>
              </Col>
              {/* Location Search */}
              <Col lg="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    id="input-location"
                    placeholder="Location"
                    type="text"
                    name="location"
                    onChange={handleSearch}
                  />
                </FormGroup>
              </Col>
            </Row>
            {/* Button to triger the search */}
            {/* <div className="text-center">
              <Button className="mt-4" color="secondary" type="submit">
                Search our Graduates
              </Button>
            </div> */}
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default SearchOurGraduates;
