import React from 'react';
import { Link } from 'react-router-dom';

const NotesSummary = () => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h1>My Notes</h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Note</Link>
        </div>
      </div>
    </div>
  );
};

export default NotesSummary;
