import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="page about">
      <h1 className="page_title">About</h1>
      <p className="about-text">
        Hello! My name is Kate. I have developed an application for Genesis as a test task.
        I used the public
        {' '}
        <a target="_blank" href="https://covid19api.com/" rel="noreferrer">
          Covid19 API
        </a>
        {' '}
        and
        {' '}
        <a target="_blank" href="https://recharts.org/en-US/" rel="noreferrer">
          Recharts
        </a>
        {' '}
        library for charts. Sometimes it doesn&apos;t work as expected, so you may need to try searching again :(
      </p>
      <img className="about-image" src="https://imgur.com/65rYbX2.png" alt="covid19-logo" />
      <p className="about-text">
        With this application you can find
        {' '}
        <Link to="/">World Global Statistics</Link>
        {' '}
        for a given period of time. To get the information you need to specify dates in the appropriate fields:
        "Select Date From" and "Select date To".
        After clicking the "Search" button,
        you will see default result with statistics on "New confirmed" cases.
        Alternatively, you can dynamically change the case type by clicking the appropriate
        input below and see the new results.
      </p>
      <img className="about-image" src="https://imgur.com/oe8M5Wr.png" alt="recharts-logo" />
      <p className="about-text">
        On page
        {' '}
        <Link to="/">Country Statistics</Link>
        {' '}
        you can search for Covid19 Statistics by specifying "Country", "Case" and "Select Date From" fields.
      </p>
      <p className="about-text">
        Thank you so much for visiting my application! Good luck (to you and me)!
      </p>
    </div>
  );
}

export default AboutPage;
