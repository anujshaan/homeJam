import React from 'react';
import Header from '../components/header';

import HomeStats from '../components/homeStats';

const Home = () => {
  return (
    <div className='homeWrapper'>
        <header>
          <Header/>
        </header>

        <div className="homeDetails">
          <h1 className='homeTitle'>Cari Cari</h1>
          <p className='homeTagline'>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
        </div>

        <div className="homeStats">
          <HomeStats />
          <HomeStats />
          <HomeStats />
          <HomeStats />
        </div>
    </div>
  );
};

export default Home;
