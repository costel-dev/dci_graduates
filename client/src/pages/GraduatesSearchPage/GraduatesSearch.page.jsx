import React from "react";

import SearchFilterCards from "../../components/SearchFilterCards/SearchFilterCards";
import { Row, Col, Container } from "reactstrap";

// ### REDUX ###
import { connect } from "react-redux";
import { loadGraduates } from "../../redux/actions/graduateActions";
import PropTypes from "prop-types";
import SearchOurGraduates from "../../components/SearchOurGraduates/SearchOurGraduates.component";

class SearchGraduatesPage extends React.Component {
  state = {
    keyword: "",
    location: "",
  };

  handleChange = (e) => {
    this.setState({ keyword: e.target.value });
  };

  componentDidMount() {
    //fetch data from server
    this.props.loadGraduates();
  }
  render() {
    const { graduates } = this.props.data;
    const { keyword } = this.state;
    let filteredGraduates = graduates;
    if (keyword !== "") {
      let regexp = new RegExp(keyword, "i");
      filteredGraduates = graduates.filter((student) => {
        return Object.values(student).reduce(
          (p, value) => p || regexp.test(value),
          false
        );
      });
    }

    return (

      <Container className="pt-8">
        <div className="pt-3 shadow">
          <SearchOurGraduates handleSearch={this.handleChange} />
        </div>
        <Row className="justify-content-center">
          {filteredGraduates.map((student) => {
            return (
              <Col xl="4" lg="4" md="6" sm="8" xs="10" key={student._id}>
                <SearchFilterCards graduate={student} />{" "}
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

SearchGraduatesPage.propTypes = {
  loadGraduates: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.graduate,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, { loadGraduates })(SearchGraduatesPage);
