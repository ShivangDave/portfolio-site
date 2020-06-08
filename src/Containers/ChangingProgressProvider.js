import React from "react";

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 1500
  };

  state = {
    valuesIndex: 0
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length
      });
    }, this.props.interval);
  }

  render() {
    const percentage = this.props.values[this.state.valuesIndex]

    return (
      <CircularProgressbarWithChildren
        background
        className={this.props.barClass}
        value={percentage}
        styles={buildStyles({
          backgroundColor: '#FFFFFF',
          pathColor: 'rgba(253, 177, 177, 1)',
          textColor: 'rgba(253, 177, 177, 1)',
          trailColor: '#FFFFFF',
          pathTransition: percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
        })}
      >
        <span>{this.props.skill}</span>
      </CircularProgressbarWithChildren>
    )
  }
}

export default ChangingProgressProvider;
