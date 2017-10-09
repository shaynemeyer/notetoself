import React from 'react';
import { shallow } from 'enzyme';
import { AddNote } from "../../components/AddNote";
import notes from '../fixtures/notes';

let startAddNote, history, wrapper;

beforeEach(() => {
  startAddNote = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddNote startAddNote={startAddNote} history={history} />);
});

test('should render AddNote correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('NoteForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});