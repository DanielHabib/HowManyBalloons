import React, { PropTypes } from 'react';
import styles from './StaticLabelDirections.css';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withViewport
@withStyles(styles)
class StaticLabelDirections {

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    return (
      <div className="StaticLabelDirections">
        <div className="StaticLabelDirections-container">
          <div className="StaticLabelDirections-text">Enter your weight in pounds</div>
        </div>
      </div>
    );
  }

}

export default StaticLabelDirections;
