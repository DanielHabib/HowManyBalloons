import React, { PropTypes } from 'react';
import styles from './PushButton.css';
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
      <div className="PushButton">
        <div className="PushButton-container">
          <div className="PushButton-text">Balloon Me!</div>
        </div>
      </div>
    );
  }

}

export default PushButton;