import React from "react";
import { connect } from 'react-redux';
import WorldMap from '../components/world-map/world.map';
import './home.sass';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <WorldMap />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { };
};

const mapDispatchToProps = (dispatch) => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
