import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentUser } from "../../actions/authActions";


// const clean = require("../../img/cleaning.jpg");
const student = require("../../img/booking.jpg");
const staff = require("../../img/admin.jpg");
const bedRoom = require("../../img/roomservice.jpg");
class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div className="mid container">
        <div className="text-center" style={{ fontSize: "25px" }}>
          Welcome {user.name}!
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>

          <div className="card hoverable" style={{ width: "18rem", hover: '', height: '22rem' }}>
            <img src={student} className="card-img-top" alt="Cleaning" />
            <div className="card-body" style={{ height: '10rem' }}>
              <h5 className="card-title">Booking</h5>
              <a href="/student" className="card-text">
                Book and check your info
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", hover: '', height: '22rem' }}>
            <img src={bedRoom} className="card-img-top" alt="Cleaning" />
            <div className="card-body">
              <h5 className="card-title">Room Service</h5>
              <a href="/block">
                Call for a room service
                </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // getCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
  ,
  { getCurrentUser }
)(Dashboard);
