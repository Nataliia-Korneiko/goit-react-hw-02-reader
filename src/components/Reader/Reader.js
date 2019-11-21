import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './reader.module.css';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  state = {
    index: 0,
  };

  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
  };

  handleDecrement = () => {
    this.setState(prevState => ({ index: prevState.index - 1 }));
  };

  handleIncrement = () => {
    this.setState(prevState => ({ index: prevState.index + 1 }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;

    const maxIndex = items.length;
    const currentIndex = index + 1;
    const disabledPrev = index === 0;
    const disabledNext = index === maxIndex - 1;

    // console.log('index', index);

    return (
      <div className={s.reader}>
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
          disabledPrev={disabledPrev}
          disabledNext={disabledNext}
        />
        <Counter currentIndex={currentIndex} maxIndex={maxIndex} />
        <Publication title={items[index].title} text={items[index].text} />
      </div>
    );
  }
}
