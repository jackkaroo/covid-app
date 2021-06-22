import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="page about">
      <h1 className="page_title">About</h1>
      <p className="about-text">
        Hello! My name is Kate. I developed this app for my Test Task for Genesis.
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
        for a given Date From and Date to. After clicking the &quot;Search&quot; button,
        you will see default result with statistics on &quot;New confirmed&quot; cases.
        Alternatively, you can dynamically change the case type by clicking the appropriate
        input below and see the new results.
      </p>
      <img className="about-image" src="https://imgur.com/oe8M5Wr.png" alt="recharts-logo" />
      <p className="about-text">
        On page
        {' '}
        <Link to="/">Country Statistics</Link>
        {' '}
        you may search Covid19 Statistics by entered Country and Date From. For changing case types
        you should search again as it is api filter.
      </p>
      <p className="about-text">
        Thank you so much for visiting my application! Good luck (to you and me)!
      </p>
    </div>
  );
}

export default AboutPage;
