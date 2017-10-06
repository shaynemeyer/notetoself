import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import selectNotes from '../selectors/notes';

export const NoteList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Notes</div>
      <div className="show-for-desktop">Note</div>
    </div>
    <div className="list-body">
      {
        props.notes.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No notes</span>
          </div>
        ) : (
          props.notes.map((note) => (<NoteListItem key={note.id} {...note}/>))
        )
      }
    </div>
  </div>
);

/* istanbul ignore next */
const mapStateToProps = (state) => {
  return {
    notes: selectNotes(state.notes, state.filters)
  };
};

export default connect(mapStateToProps)(NoteList);
