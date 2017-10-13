// @flow weak

import React, {
  PureComponent
}                           from 'react';
import PropTypes            from 'prop-types';
import {Jumbotron}          from '../../components';
import AnimatedView         from '../../components/animatedView/AnimatedView';
import VirtualizedSelect    from 'react-virtualized-select';
import createFilterOptions  from 'react-select-fast-filter-options';
import { getCategories }    from '../../services';
import {
  CaseSensitiveSanitizer,
  PrefixIndexStrategy
}                           from 'js-search'

const indexStrategy = new PrefixIndexStrategy()
const sanitizer = new CaseSensitiveSanitizer()

class TryAutocomplete extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired
  };

  constructor(props) {
    super(props)

    this.state = {
      currentSelection: '',
      options: []
    }

    this._onChange = this._onChange.bind(this)
  }

  componentDidMount () {
    getCategories()
      .then((results) => this.setState({ options: results.data }))
  }

  handleInputChange (elements) {
    const { fields } = this.props
    const { livingAreas } = fields

    this.setState({ livingAreaInput: elements })

    const livingAreasValues = Object.values(elements).map(({ value }) => value).join(',')
    livingAreas.onChange(livingAreasValues)
  }

  _onChange (elements) {
    this.setState({ currentSelection: elements })
  }

  render() {
    const { currentSelection, options } = this.state
    const filterOptions = createFilterOptions({
      indexStrategy,
      options,
      sanitizer
    })

    return(
      <AnimatedView>
        <Jumbotron>
          <h3>
            Autocomplete Input
          </h3>
          <div>
            <VirtualizedSelect
              name='form-input-select'
              multi
              searchable
              ignoreCase
              placeholder='Start typing to filter...'
              value={currentSelection}
              options={options}
              filterOptions={filterOptions}
              onChange={this._onChange}
            />
          </div>
        </Jumbotron>
      </AnimatedView>
    );
  }
}

export default TryAutocomplete;
