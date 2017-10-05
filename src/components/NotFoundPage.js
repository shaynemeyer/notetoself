import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go Home</Link>!
  </div>
);

export default NotFoundPage;
