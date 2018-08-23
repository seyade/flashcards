import React, { Component } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 250px;
  flex-direction: column;
  width: 250px;
  height: 350px;
  margin: 10px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #fff;
  cursor: pointer;
`;

export class Card extends Component {
  constructor() {
    super();

    this.state = {
      reveal: false,
    };

    this.revealAnswer = this.revealAnswer.bind(this);
  }

  revealAnswer() {
    this.setState({ reveal: true });
  }

  render() {
    const { prompt, answer } = this.props.card;

    return (
      <CardContainer onClick={this.revealAnswer}>
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
      </CardContainer>
    );
  }
}

export default Card;
