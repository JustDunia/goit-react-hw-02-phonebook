import { Component } from 'react';
import { PropTypes } from 'prop-types';
import styles from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        <button
          className={styles.btn}
          onClick={onLeaveFeedback}
          id={options[0]}
        >
          Good
        </button>
        <button
          className={styles.btn}
          onClick={onLeaveFeedback}
          id={options[1]}
        >
          Neutral
        </button>
        <button
          className={styles.btn}
          onClick={onLeaveFeedback}
          id={options[2]}
        >
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
