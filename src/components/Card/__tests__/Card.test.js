import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Card } from '../index';

configure({ adapter: new Adapter() });

const props = {
  card: {
    id: 0,
    prompt: 'test prompt',
    answer: 'test answer',
  },
};

describe('Card', () => {
  const card = shallow(<Card {...props} />);

  it('renders correctly', () => {
    const tree = renderer.create(card).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('sets `reveal` to be `false`', () => {
    expect(card.state().reveal).toBe(false);
  });

  it('renders to card prompt', () => {
    expect(card.find('.card__prompt h4').text()).toEqual(props.card.prompt);
  });

  it('renders to card answer', () => {
    expect(card.find('.card__answer h4').text()).toEqual(props.card.answer);
  });

  it('applies the `text-hidden` class to the card answer', () => {
    expect(card.find('.card__answer h4').hasClass('text-hidden')).toBe(true);
  });

  describe('when clicking on the card', () => {
    beforeEach(() => {
      card.simulate('click');
    });

    it('updates `reveal` to be `true`', () => {
      expect(card.state().reveal).toBe(true);
    });

    it('applies the `text-revealed` class to the card answer', () => {
      expect(card.find('.card__answer h4').hasClass('text-revealed')).toBe(
        true
      );
    });
  });
});
