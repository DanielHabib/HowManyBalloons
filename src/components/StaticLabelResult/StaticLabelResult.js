import React, { PropTypes } from 'react';
import styles from './StaticLabelResult.css';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withViewport
@withStyles(styles)
class StaticLabelResult extends React.Component{

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };


  constructor() {
        super();
        this.state = {
        active: false,
          result: 5
      };
  }

  activate () {
        this.setState({active: true}
          );
  };

  displayResult(number) {
    console.log("fds");
    this.setState({result: number})
  };

  render() {
    return (
      <div className="StaticLabelResult">
        <div onClick={this.displayResult.bind(this,100)} className="StaticLabelResult-container">
          <p className="StaticLabelResult-text">{this.state.result}</p>
        </div>
      </div>
    );
  }

}

// var template = React.createClass({
//     getInitialState: function () {
//         return {active: false,
//                 result: 432};
//     },
//     toggle: function() {
//         this.setState({active: true});
//     },
//     displayResult: function() {
//       // this.setState({result: 4});
//       console.log("bruh");
//     },
//     render: function() {
//           return (
//       <div className="StaticLabelResult">
//         <div className="StaticLabelResult-container">
//           <p onClick={this.displayResult()} className="StaticLabelResult-text">{this.state.result}</p>
//         </div>
//       </div>
//     );}
// });
export default StaticLabelResult;
