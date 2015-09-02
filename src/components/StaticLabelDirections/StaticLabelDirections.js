import React, { PropTypes } from 'react';
import styles from './StaticLabel.css';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withViewport
@withStyles(styles)
class StaticLabel {

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    return (
      <div className="StaticLabel">
        <div className="StaticLabel-container">
          <div className="StaticLabel-text">How Many Balloons would it take to lift your fat ass?</div>
        </div>
      </div>
    );
  }

}

export default StaticLabel;
