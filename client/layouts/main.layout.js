import React from 'react';
import SvgIconRefs from '../components/icons/svg.icon.refs';
import GithubCorner from '../components/icons/github.corner';

import './main.layout.sass';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="app">
        <SvgIconRefs />
        <GithubCorner />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
