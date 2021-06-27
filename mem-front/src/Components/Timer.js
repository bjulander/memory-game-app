import React, { Component } from "react";

class Timer extends Component {

    constructor() {
        super();
        this.timer = React.createRef();
        this.state = {
          time: 0,
          color: "#" + Math.floor(Math.random() * 16777215).toString(16)
        }
      }

  componentDidMount() {
    this.interval = setInterval(
      this.clockTick,
      1 * 1000
    )
  }

  componentWillUnmount() {
      debugger
    clearInterval(this.interval)
    this.setState({time: 0})
  }

  render() {
    const {time, color} = this.state;
    return (
      <section className="timer" style={{ background: color }} ref={this.timer}>
        <h1>{time}</h1>
      </section>
    )
  }

  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }))
  }

  stopClock = () => {
    clearInterval(this.interval);
    this.setState({ className: "hidden" });
  }
}

export default Timer;
