import React from 'react';
import { shallow } from 'enzyme';
import NotesSummary from '../../components/NotesSummary';

test('should render NotesSummary', () => {
  const wrapper = shallow(<NotesSummary />);
  expect(wrapper).toMatchSnapshot();
});
