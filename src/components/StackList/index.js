import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { read_cookie } from 'sfcookies';
import { connect } from 'react-redux';

// import stacks from '../data/stacks.json';
import { setStack, loadStack } from '../../actions';

const COOKIES_KEY = 'flashcards';

export class StackList extends Component {
  constructor() {
    super();

    this.state = {
      stacks: {
        cards: [],
      },
    };
  }

  componentDidMount() {
    const stacksData = read_cookie(COOKIES_KEY);

    if (this.props.stacks.length === 0) {
      this.props.loadStack(stacksData);
    }
  }

  renderStacksCategory() {
    return (
      <div className="stack-categories">
        {this.props.stacks.map((stack, index) => (
          <Link
            to="/stack"
            key={index}
            onClick={() => this.props.setStack(stack)}
          >
            <h4>{stack.title}</h4>
          </Link>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="content">
        {this.props.stacks ? (
          this.renderStacksCategory()
        ) : (
          <div className="">
            <h2>Create a new Stack</h2>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stacks: state.stacks,
  };
};

export default connect(
  mapStateToProps,
  { setStack, loadStack }
)(StackList);
