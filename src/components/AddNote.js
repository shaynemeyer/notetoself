import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';

export class AddNote extends React.Component {
  onSubmit = () => {

  };
  render() {
    return (
      <div>

        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Note</h1>
          </div>
        </div>
        <div className="content-container">
          <NoteForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

export default AddNote;
