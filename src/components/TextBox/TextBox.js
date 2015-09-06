/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './TextBox.css';
import PubSub from 'pubsub-js';

@withStyles(styles)
class TextBox {

  static propTypes = {
    maxLines: PropTypes.number
  };

  static defaultProps = {
    maxLines: 1
  };

  passText() {
    let text = document.getElementsByClassName('TextBox-input')[0].value
  }
  componentDidMount() {
    var puhsuh = function() {
      let text = document.getElementsByClassName('TextBox-input')[0].value;
      PubSub.publishSync( 'text_pushed', text);
  };
    PubSub.subscribe('button_press', puhsuh);
  }

  pressEnter() {
    if (event.keyCode === 13) {
      let text = document.getElementsByClassName('TextBox-input')[0].value;
      PubSub.publishSync( 'text_pushed', text);
    }
  }

  render() {
    return (
      <div className="TextBox">
        {this.props.maxLines > 1 ?
          <textarea {...this.props} className="TextBox-input" ref="input" key="input" rows={this.props.maxLines} /> :
          <input {...this.props} onClick={this.passText.bind(this)} onKeyDown={this.pressEnter.bind(this)} type="number" placeholder="Type numbers and shit here" className="TextBox-input" ref="input" key="input" />}
      </div>
    );
  }

}

export default TextBox;
