import React, { PropTypes } from 'react';
import styles from './StaticLabelResult.css';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withViewport
@withStyles(styles)
class StaticLabelResult {

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    return (
      <div className="StaticLabelResult">
        <div className="StaticLabelResult-container">
          <div className="StaticLabelResult-text">Result</div>
        </div>
      </div>
    );
  }

}

export default StaticLabelResult;
