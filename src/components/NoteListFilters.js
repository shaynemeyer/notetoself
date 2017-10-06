import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../actions/filters";
import { DateRangePicker } from 'react-dates';

export class NoteListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
}