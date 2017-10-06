import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'; 

const NoteListItem = ({ dispatch, id, description, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">
         {moment(createdAt).format('MMMM Do, YYYY')}
      </span>
    </div>
  </Link>
);

export default NoteListItem;
