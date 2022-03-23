import Button from "react-bootstrap/Button";
import { Component } from "react";

class Item extends Component {
  state = { counter: 0 };

  incrementCounter = (event) => {
    const { counter } = this.state;
    if (counter < 20)
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };
  decrementCounter = (event) => {
    const { counter } = this.state;
    if (counter > 0)
      this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };
  render() {
    const { fruitName } = this.props;
    const { counter } = this.state;
    return (
      <div>
        <p>
          {fruitName}:{counter}
        </p>
        <div>
          <Button
            value={fruitName}
            variant="primary"
            className="mx-2"
            onClick={this.incrementCounter}
          >
            +
          </Button>
          <Button
            value={fruitName}
            variant="primary"
            className="mx-2"
            onClick={this.decrementCounter}
          >
            -
          </Button>
        </div>
      </div>
    );
  }
}
export default Item;
