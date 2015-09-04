// Grabbed from here => http://codepen.io/jonitrythall/pen/znCfA
import React from 'react';
import styles from './BalloonAnimation.css';
import withStyles from '../../decorators/withStyles';
import withViewport from '../../decorators/withViewport';
import Link from '../Link';
import Navigation from '../Navigation';


@withViewport
@withStyles(styles)
class BalloonAnimation {

  render() {
    return (
        <div className="main-container">
          <div className="balloon">
            <div className="balloon-tail"></div>
          </div>
          <div className="string"></div>
          <div className="string-tail"></div>
          <div className="tie"></div>
          <div className="tie tie-2"></div>
          <div className="tie-tail"></div>
          <div className="body">
            <div className="fin"></div>
            <div className="fin fin-2"></div>
            <div className="eye"></div>
          </div>
        </div>
    );
  }
}
export default BalloonAnimation;
