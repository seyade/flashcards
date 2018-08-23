import React, { Component } from 'react';

export class Card extends Component {
  constructor() {
    super();

    this.state = {
      reveal: false,
    };
  }

  render() {
    const { prompt, answer } = this.props.card;

    return (
      <div className="card" onClick={() => this.setState({ reveal: true })}>
        <div className="card__header">
          <div className="card__prompt">
            <h4>{prompt}</h4>
          </div>
        </div>
        <div className="card__content">
          <div className="card__answer">
            <h4 className={this.state.reveal ? 'text-revealed' : 'text-hidden'}>
              {answer}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
