import React, { PropTypes } from 'react';
import styles from './PushButton.css';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

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
    console.log('You clicked: ');

  }

  render() {
    return (
      <div className="PushButton">
        <div className="PushButton-container">
          <button onClick={this.handleClick.bind(this)} className="PushButton-text">Balloon Me!</button>
        </div>
      </div>
    );
  }

}
export default PushButton;
