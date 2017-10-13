// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {Jumbotron}    from '../../components';
import cx             from 'classnames';
import { Link }       from 'react-router-dom';
import AnimatedView   from '../../components/animatedView/AnimatedView';

class Home extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired
  };

  render() {
    return(
      <AnimatedView>
        <Jumbotron>
          <h2>
            Honeypot - Almondia
          </h2>
          <h3>
            Coding Exercise
          </h3>
          <span>
            This code exercise consists into create an Autocomplete input component to filter options as users type
            {' '}
            and show badges for each selected filtered option.
            <br/>
            <strong>Use the navigation bar above to try the code.</strong>
          </span>
        </Jumbotron>
      </AnimatedView>
    );
  }
}

export default Home;
