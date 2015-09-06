import React, {
    PropTypes
}
from 'react';
import styles from './StaticLabelResult.css';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import PubSub from 'pubsub-js';

@
withViewport@ withStyles(styles)
class StaticLabelResult extends React.Component {

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
            result: 0
        };
    };
    componentDidMount() {
        var puhsuh = function(string, data) {
            this.displayResult(data);
        }.bind(this);
        PubSub.subscribe('text_pushed', puhsuh);
    };

    activate() {
        this.setState({
            active: true
        });
    };

    displayResult(number) {

      var numCalc = Math.ceil(number * 453.593 / 14);
      var numStr = numCalc.toString();
      let strSuffix = "\nballoons";
      var finalStr = numStr.concat(strSuffix);
        this.setState({
            result: finalStr
        })
        PubSub.publishSync('button_press', 'hello world!');
    };

    render() {
        return ( < div className = "StaticLabelResult" >
                < div onClick = {
                    this.displayResult.bind(this, 100)
                }
                className = "StaticLabelResult-container" >
                < p className = "StaticLabelResult-text" > {
                    this.state.result
                } < /p>
        </div >
                < /div>
    );
  }
}

export default StaticLabelResult;
