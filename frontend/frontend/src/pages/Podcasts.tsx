import React from 'react';
import { PageTitle } from './Layout';
// Podcasts.tsx contains the minimal display to link to the ouside website

function PodList() {
  return (
    <>
      <PageTitle title="Podcast" />
      <header className="App-header">
        <div className="text-center">
          <h1>TO LISTEN TO MY PODCAST</h1>
          <a href="https://baconsale.com">
            <h2>Click Here</h2>
          </a>
        </div>
      </header>
    </>
  );
}

export default PodList;
