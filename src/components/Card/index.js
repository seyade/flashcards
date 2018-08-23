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

const CardHeader = styled.div`
  width: 100%;
  height: 240px;
  padding: 40px;
  background-color: #ffce00;
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const CardPrompt = styled.div`
  display: inline-block;
  width: 50%;
  text-align: left;
`;

const CardAnswer = styled.div`
  display: inline-block;
  width: 50%;
  text-align: right;
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
        <CardHeader>
          <CardPrompt>
            <h4>{prompt}</h4>
          </CardPrompt>
        </CardHeader>
        <CardContent>
          <CardAnswer>
            <h4 className={this.state.reveal ? 'text-revealed' : 'text-hidden'}>
              {answer}
            </h4>
          </CardAnswer>
        </CardContent>
      </CardContainer>
    );
  }
}

export default Card;
