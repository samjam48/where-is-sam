import React from "react";
import { connect } from 'react-redux';
import WorldMap from '../components/world-map/world.map';
import { fetchLocations } from '../actions/map.actions';

import './home.sass';

class Home extends React.Component {
  componentWillMount() {
    this.props.fetchLocations();
  }

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
  return {
    fetchLocations: () => dispatch(fetchLocations()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
