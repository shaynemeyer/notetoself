import React from 'react';
import moment from 'moment';

const now = moment();

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.note ? props.note.description : '',
      createdAt: props.note ? moment(props.note.createdAt) : now,
      error: ''
    }
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description) {
      this.setState(() => ({ error: 'Please provide a description of the note.'}));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}></p>}
        <input
          type="text"
          className="text-input"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <button className="button">Submit</button>
      </form>
    )
  }
};
