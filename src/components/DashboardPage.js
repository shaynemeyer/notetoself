import React from 'react';
import NoteListFilters from './NoteListFilters';
import NotesSummary from './NotesSummary';
import NoteList from './NoteList'

const DashboardPage = () => (
  <div>
    <NotesSummary/>
    <NoteListFilters/>
    <NoteList/>
  </div>
);

export default DashboardPage;
