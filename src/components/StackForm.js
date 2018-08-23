import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from 'react-bootstrap';
import { delete_cookie } from 'sfcookies';

import { connect } from 'react-redux';
import { addStack } from '../actions';

const COOKIES_KEY = 'flashcards';

export class StackForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      cards: [],
    };
  }

  addCard() {
    const { cards } = this.state;

    cards.push({ id: cards.length, prompt: '', answer: '' });
    this.setState({ cards });
  }

  updateCardPart(event, index, part) {
    const { cards } = this.state;

    cards[index][part] = event.target.value;
    this.setState({ cards });
  }

  addStack() {
    console.log('StackForm state', this.state);
    this.props.addStack(this.state);
    // bake_cookie(COOKIES_KEY, this.state);
  }

  clearStacks() {
    delete_cookie(COOKIES_KEY);
    this.setState({ cards: [] });
  }

  removeStack(id) {
    delete_cookie(COOKIES_KEY, id);
  }

  render() {
    return (
      <div>
        <Link className="link-home" to="/">
          <h4>Home</h4>
        </Link>
        <h4>Create a New Stack</h4>
        <br />
        <Form inline>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <FormControl
              onChange={e => this.setState({ title: e.target.value })}
            />
          </FormGroup>
          {this.state.cards.map((card, index) => {
            return (
              <div key={card.id}>
                <br />
                <FormGroup>
                  <ControlLabel>Prompt</ControlLabel>
                  <FormControl
                    onChange={e => this.updateCardPart(e, index, 'prompt')}
                  />
                  <ControlLabel>Answer</ControlLabel>
                  <FormControl
                    onChange={e => this.updateCardPart(e, index, 'answer')}
                  />
                </FormGroup>
              </div>
            );
          })}
        </Form>
        <br />
        <Button onClick={() => this.addCard()}>Add Card</Button>{' '}
        <Button onClick={() => this.addStack()}>Save and Add The Stack</Button>
        <Button onClick={() => this.clearStacks()}>Clear Stack</Button>
      </div>
    );
  }
}

export default connect(
  null,
  { addStack }
)(StackForm);
