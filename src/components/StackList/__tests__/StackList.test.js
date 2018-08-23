import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { StackList } from '../index';
import { stacks } from '../../../data/fixtures';

configure({ adapter: new Adapter() });

const props = { stacks };

describe('StackList', () => {
  const stackList = shallow(<StackList {...props} />);

  it('renders the correct number of links', () => {
    expect(stackList.find('Link').length).toEqual(props.stacks.length);
  });
});
