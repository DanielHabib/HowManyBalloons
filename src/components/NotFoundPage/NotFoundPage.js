/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './NotFoundPage.css';

@withStyles(styles)
class NotFoundPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired
  };

  render() {
    let title = 'I TOLD YOU NOT TO CLICK THAT!';
    this.context.onSetTitle(title);
    this.context.onPageNotFound();
    return (
      <div>
        <h1>{title}</h1>
        <p>Dammit, Johnson! Theyre onto us!</p>
      </div>
    );
  }

}

export default NotFoundPage;
