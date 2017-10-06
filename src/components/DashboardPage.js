import React from 'react';
import NoteForm from './NoteForm';
import NotesSummary from './NotesSummary';
import NoteList from './NoteList'

const DashboardPage = () => (
  <div>
    <NotesSummary/>
    <NoteList/>
  </div>
);

export default DashboardPage;
