// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {Jumbotron}    from '../../components';
import AnimatedView   from '../../components/animatedView/AnimatedView';

class About extends PureComponent {
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
          <h3>
            About
          </h3>
          <div>
            <h4>Coding exercise specifications:</h4>
            <div>
              <ol>
                <li>Backend should be implemented in Ruby on Rails (combined with any Gem you consider useful)</li>
                <li>You are free to use whatever database (relational or non-relational) you consider the best choice</li>
                <li>You are free to use whatever frontend framework or library you consider the best choice</li>
                <li>In a first step, please create 3 categories. Each category should be in a separate table/class/model. The only attribute which is necessary for each of it is a name. Please generate 2.000 random entries for each category (I would recommend using the Faker Gem for this task). The names should contain from 1 to 3 words, but must contain at least one name of each length</li>
                <li>
                  The autocomplete itself should meet the following requirements:
                  <ol>
                    <li>It should do the proposal as you type</li>
                    <li>The search should be done over all three categories</li>
                    <li>It should be clear to which category each result belongs to</li>
                    <li>Partial matches should be possible but just from the beginning of a word. For example, the system should return "Albert Einstein" if you search for "Ein", but not if you search for "stein"</li>
                    <li>Search should be case insensitive</li>
                    <li>If you select a result, a badge should appear below the search field, stating the category and the selected value. For each further selected result, another badge should be shown</li>
                    <li>It should be possible to delete badges</li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </Jumbotron>
      </AnimatedView>
    );
  }
}

export default About;
