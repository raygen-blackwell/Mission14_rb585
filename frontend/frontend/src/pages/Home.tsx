import logo from '../JoelHiltonHeadshot.jpg';
import React, { useState } from 'react';
import { PageTitle } from './Layout';
// Home.tsx is the landing page that incorporates 'state' by having fun with the picture when it is hovered over

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <PageTitle title="Joel's Movies" />
      <div className="App">
        <header className="App-header">
          <h1>Joel's movies and stuff about movies!</h1>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transform: isHovered ? 'scale(1.5)' : 'scale(1)' }}
          >
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h6>(Hover over IMG for some fun :)</h6>
        </header>
      </div>
    </>
  );
}

export default Home;
