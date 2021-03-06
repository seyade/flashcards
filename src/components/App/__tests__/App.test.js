import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../index';

configure({ adapter: new Adapter() });

describe('App', () => {
  const app = shallow(<App />);

  it('renders the Flashcard Pro title', () => {
    expect(app.find('h2').text()).toEqual('Flashcard Pro');
  });

  it('renders the StackList', () => {
    // console.log(app.debug());
    expect(app.find('Connect(StackList)').exists()).toBe(true);
  });

  it('renders a link to create a new stack', () => {
    expect(app.find('Link h4').text()).toEqual('Create a New Stack');
  });
});
