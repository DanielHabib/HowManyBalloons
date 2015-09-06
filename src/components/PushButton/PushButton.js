import React, { PropTypes } from 'react';
import styles from './PushButton.css';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import PubSub from 'pubsub-js';

@withViewport
@withStyles(styles)
class PushButton {

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  handleClick(){
    PubSub.publishSync( 'button_press', 'hello world!' );
  }

  render() {
    return (
      <div className="PushButton">
        <div className="PushButton-container">
          <button onClick={this.handleClick.bind(this)} className="PushButton-text">Calculate!</button>
        </div>
      </div>
    );
  }

}
export default PushButton;
