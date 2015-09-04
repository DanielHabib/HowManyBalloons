/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import TextBox from '../TextBox';
import PushButton from '../PushButton';
import StaticLabel from '../StaticLabel';
import StaticLabelDirections from '../StaticLabelDirections';
import StaticLabelResult from '../StaticLabelResult';
import BalloonAnimation from '../BalloonAnimation';

@withContext
@withStyles(styles)
class App {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object
  };

  render() {
    return !this.props.error ? (
      <div className="Background">
        <StaticLabel />
        <StaticLabelDirections />
        <StaticLabelResult />
        <TextBox />
        <PushButton />
        <BalloonAnimation />
      </div>
    ) : this.props.children;
  }

}

export default App;
