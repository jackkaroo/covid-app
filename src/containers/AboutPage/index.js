import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="page about">
      <h1 className="page_title">About</h1>
      <p className="page-text">
        Hello! My name is Kate. I developed this app for my Test Task in Genesis.
        I used the public
        {' '}
        <a target="_blank" href="https://covid19api.com/" rel="noreferrer">
          Covid19 API
        </a>
        . Sometimes it doesn&apos;t work as expected, so you may need to try searching again :(
      </p>
      <img src="https://imgur.com/65rYbX2.png" alt="covid19-logo" />
      <p className="page-text">
        With this application you can find
        {' '}
        <Link to="/">World Global Statistics</Link>
        {' '}
        for a given Date From and Date to. After clicking the &quot;Search&quot; button,
        you will see default result with statistics on &quot;New confirmed&quot; cases.
        Alternatively, you can dynamically change the case type by clicking the appropriate
        input below and see the new results.
      </p>
      <p className="page-text">
        On page
        {' '}
        <Link to="/">Country Statistics</Link>
        {' '}
        you may search Covid19 Statistics by entered Country and Date From. For changing case types
        you should search again as it is api filter.
      </p>
      <p className="page-text">
        Thank you so much for visiting my application! Good luck (to you and me)!
      </p>
    </div>
  );
}

export default AboutPage;
