/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './TextBox.css';

@withStyles(styles)
class TextBox {

  static propTypes = {
    maxLines: PropTypes.number
  };

  static defaultProps = {
    maxLines: 1
  };

  //tried to put it in here but didnt work either, tried it this way and the way it looks in my file
  /*var BalloonCount = React.createClass({
    CountingBalloons: function(weight) {
      var balloons = weight * 453.593 / 14;
      return console.log(balloons);
    }
  }); */

  howmanyballoonsalg(){
    var balloons = weight * 453.953 / 14;
    console.log(balloons);
  }

  render() {
    return (
      <div className="TextBox">
        {this.props.maxLines > 1 ?
          <textarea {...this.props} className="TextBox-input" ref="input" key="input" rows={this.props.maxLines} /> :
          <input {...this.props} className="TextBox-input" ref="input" key="input" />}
      </div>
    );
  }

}

export default TextBox;
